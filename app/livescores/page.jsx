"use client";

import "src/app/globals.css";
import useSWR from "swr";
import LiveScores from "./livescores";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App(){
  const { data } = useSWR("/api/animals", fetcher);
  return (
    <section>
      <div>{data}</div>
      <div class="live-scores">
            <LiveScores />
        </div>
      <div class="scoreboard">

      </div>
      
    </section>
  );
}
  
