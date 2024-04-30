import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import styles from '~/styles/home.css';
import MainNavigation from '~/components/MainNavigation';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main id="content">
    <h1>Balance Point Wellness</h1>
    <p id='cta'>Mental health</p>
    </main>

  );
}
export function links() {
  return [
    {rel: 'stylesheet', ref: styles }
  ]
}