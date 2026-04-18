import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { GoogleGenAI } from '@google/genai'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function readEnvKeyFromDotEnv(projectRoot, keyName) {
  const envPath = path.join(projectRoot, '.env')
  if (!fs.existsSync(envPath)) return null
  const raw = fs.readFileSync(envPath, 'utf8')
  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const eq = trimmed.indexOf('=')
    if (eq === -1) continue
    const name = trimmed.slice(0, eq).trim()
    if (name !== keyName) continue
    let value = trimmed.slice(eq + 1).trim()
    value = value.replace(/^['"]/, '').replace(/['"]$/, '')
    return value || null
  }
  return null
}

async function main() {
  const projectRoot = path.resolve(__dirname, '..')
  const apiKey = readEnvKeyFromDotEnv(projectRoot, 'VITE_GEMINI_API_KEY')
  if (!apiKey) {
    throw new Error('Missing VITE_GEMINI_API_KEY in .env')
  }

  const outputPath = path.join(projectRoot, 'src', 'assets', 'hero-character.png')
  const model = 'gemini-2.5-flash-image'
  const prompt = [
    'Create a high-quality cute 3D animated-style character avatar portrait.',
    'Head and shoulders, friendly expression, soft studio lighting.',
    'Modern Pixar-like style, very clean, centered composition with safe margins for favicon use.',
    'Background must be a very light lavender-to-white gradient or pure white.',
    'No text, no watermark, no logos.',
    'Return exactly one PNG image.',
  ].join(' ')

  const ai = new GoogleGenAI({ apiKey })
  const response = await ai.models.generateContent({
    model,
    contents: [{ role: 'user', parts: [{ text: prompt }] }],
    config: { responseModalities: ['IMAGE'] },
  })

  const parts = response.candidates?.[0]?.content?.parts ?? []
  for (const part of parts) {
    const inlineData = part.inlineData
    if (!inlineData?.data) continue
    const buffer = Buffer.from(inlineData.data, 'base64')
    fs.mkdirSync(path.dirname(outputPath), { recursive: true })
    fs.writeFileSync(outputPath, buffer)
    console.log(`Wrote ${outputPath} (${buffer.byteLength} bytes)`)
    return
  }

  throw new Error('No inline image data returned from model.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})

