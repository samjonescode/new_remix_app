import fs from 'fs/promises';
export async function getStoredNotes() {
  const rawFileContent = await fs.readFile('note.json', { encoding: 'utf-8' });
  const data = JSON.parse(rawFileContent);
  const storedNotes = data.notes ?? [];
  console.log('stored notes: ', storedNotes)
  return storedNotes;
}

export function storeNotes(notes) {
  return fs.writeFile('note.json', JSON.stringify({ notes: notes || [] }));
}