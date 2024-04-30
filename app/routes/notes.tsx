import { json, redirect } from '@remix-run/node';
import NewNote from '~/components/NewNote';
import { getStoredNotes, storeNotes } from '~/data/notes';
import NoteList, { links as noteListLink } from '~/components/NoteList';
import { useLoaderData } from '@remix-run/react';
export default function Notes() {
    const loaderJson = useLoaderData()
    return (
        <main>
            <h1>Notes</h1>
        <NewNote />
        <NoteList notes={loaderJson}/>
        </main>
    )   
}
export async function loader() {
    const notes = await getStoredNotes();
    return notes;
}
export async function action(data) {
    const {request} = data;
    const formData = await request.formData();
    const note = Object.fromEntries(formData)
    note.id = new Date().toISOString();
    const storedNotes = await getStoredNotes()
    storedNotes.push(note);
    storeNotes(storedNotes);
    return null;
}
export function links() {
    return [...noteListLink()]
}