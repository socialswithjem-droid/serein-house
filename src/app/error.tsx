'use client';
export default function ErrorPage({reset}:{reset:()=>void}){return <section className="empty section"><h1>A small interruption.</h1><p>Something went wrong while opening this page.</p><button className="button" onClick={reset}>TRY AGAIN</button><a className="text-link" href="/">RETURN HOME</a></section>}
