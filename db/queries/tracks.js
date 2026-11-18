import client from "../client.js";

export const createTrack = async (trackName, durationMs) => {
  const {
    rows: [createdTrack],
  } = await client.query(
    `
    INSERT INTO tracks (name, duration_ms)
    VALUES ($1, $2)
    RETURNING *;
  `,
    [trackName, durationMs],
  );

  return createdTrack;
};
