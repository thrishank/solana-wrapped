import { Connection } from "@solana/web3.js";

export const lst_tokens = [
  "LSTxxxnJzKDFSLr4dUkPcmCf5VyryEqzPLz5j4bpxFp",
  "Comp4ssDzXcLeu2MnLuGNNFC4cmLPMng8qWHPvzAMU1h",
  "MLLWWq9TLHK3oQznWqwPyqD7kH4LXTHSKXK4yLz7LjD",
  "HUBsveNpjo5pWqNkH57QzxjQASdTVXcSK7bVKTSZtcSX",
  "HEALfPnLU31roNrnhB8bHWQVszMMAKro4KJRrnkQyVpZ",
  "strng7mqqc1MBJJV6vMzYbEqnwVGvKKGKedeCvtktWA",
  "7Q2afV64in6N6SeZsAAB81TJzwDoD6zpqmHkzi9Dcavn",
  "yontaGPyo7eLjKfAhW4eXU3L1adKbthqRHx9MsJCzvg",
  "picobAEvs6w7QEknPce34wAE4gknZA9v5tTonnmHYdX",
  "stkrHcjQGytQggswj3tCF77yriaJYYhrRxisRqe9AiZ",
  "2LuXDpkn7ZWMqufwgUv7ZisggGkSE5FpeHCHBsRgLg3m",
  "9zecJ6ryY3PXfW1wTd1Nz1GR9hzWhMYw62KDbvSyEJAj",
  "ELSoL1owwMWQ9foMsutweCsMKbTPVBD9pFqxQGidTaMC",
  "uPtSoL2qszk4SuPHNE2zqk1gDtqCq21ZE1yZCqvFTqq",
  "jucy5XJ76pHVvtPZb5TKRcGQExkwit2P5s4vY8UzmpC",
  "uSo1ynGWS3qc2B1nN2MmEHN5cYaNbT7vJp87LtgkpV8",
  "RSoLp7kddnNwvvvaz4b1isQy8vcqdSwXjgm1wXaMhD8",
  "vSoLxydx6akxyMD9XEcPvGYNGq6Nn66oqVb3UkGkei7",
  "Ra1so1sTkvX3PorAM9ewqrsUMz9sPSbfFZ5oZUjN4oc",
  "LAinEtNLgpmCP9Rvsf5Hn8W6EhNiKLZQti1xfWMLy6X",
  "SouL4UuxKaFutpyZGb2weXUPEQCCsmEHSubMJEs7ttH",
  "B5GgNAZQDN8vPrQ15jPrXmJxVtManHLqHogj9B9i4zSs",
  "jag58eRBC1c88LaAsRPspTMvoKJPbnzw9p9fREzHqyV",
  "Dicscx2kpukGBATbjgsuzdbsVRFktV19BXEHofPQwEQF",
  "43CXsrQV7WyMvBsUiiZQMNU5Sdp28Jy61YMtx4J3RT7T",
  "RDLGTw8UcSjpPkuu2u8AgEfPJk95DjcnrgPEyRyVFd6",
  "apySoLhdVa6QbvNyEjXCbET3FdUm9cCdEvYyjCU7icM",
  "EPCz5LK372vmvCkZH3HgSuGNKACJJwwxsofW6fypCPZL",
  "KUMAgSzADhUmwXwNiUbNHYnMBnd89u4t9obZThJ4dqg",
  "nordEhq2BnR6weCyrdezNVk7TwC3Ej94znPZxdBnfLM",
  "Dso1bDeDjCQxTrWHqUUi63oBvV7Mdm6WaobLbQ7gnPQ",
  "iceSdwqztAQFuH6En49HWwMxwthKMnGzLFQcMN3Bqhj",
  "MangmsBgFqJhW4cLUR9LxfVgMboY1xAoP8UUBiWwwuY",
  "Bybit2vBJGhPF52GBdNaQfUJ6ZpThSgHBobjWZpLPb4B",
  "envSBKVtPgw9prFxQPkUTyPuJxRYAjFWTgDHZ9WCohi",
  "Zippybh3S5xYYam2nvL6hVJKz1got6ShgV4DyD1XQYF",
  "gSvP9zBJ33pX7W2finzAYJZp6Q9ipNAQ19xU9PrCirz",
  "stacMUJ1gnBwu5tdKB1xtSmtNu9xNqvBQXoDB8eX92n",
  "rug3uop5ibttn6FoQe5WLiZ1cW6wTUymnSECB6GXvta",
  "XAnDeUmMcqFyCdef9jzpNgtZPjTj3xUMj9eXKn2reFN",
  "PoLaRbHgtHnmeSohWQN83LkwA4xnQt91VUqL5hx5VTc",
  "phaseZSfPxTDBpiVb96H4XFSD8xHeHxZre5HerehBJG",
  "BANXyWgPpa519e2MtQF1ecRbKYKKDMXPF1dyBxUq9NQG",
  "DLGToUUnqy9hXxpJTm5VaiBKqnw9Zt1qzvrpwKwUmuuZ",
  "Fi5GayacZzUrfaCRCJtBz2vSYkGF56xjgCceZx5SbXwq",
  "suPer8CPwxoJPQ7zksGMwFvjBQhjAHwUMmPV4FVatBw",
  "prgnSYr57EiEMUknwPrdaUSMyd4eFpdZDVBaa1xR2jY",
  "Agi84n7Hfw9sQMah9sumHU6Jyjsc6Uw2WjehSFG92qMG",
  "bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1",
  "rad8NdseJYbjJUFLsv5SuBU9g29N3m4SyYndSbwoKH3",
  "LSoLi4A4Pk4i8DPFYcfHziRdEbH9otvSJcSrkMVq99c",
  "mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So",
  "StPsoHokZryePePFV8N7iXvfEmgUoJ87rivABX7gaW6",
  "5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm",
  "WensoLXxZJnev2YvihHFchn1dVVFnFLYvgomXWvvwRu",
  "st8QujHLPsX3d6HG9uQg9kJ91jFxUgruwsb1hyYXSNd",
  "camaK1kryp4KJ2jS1HDiZuxmK7S6dyEtr9DA7NsuAAB",
  "BgYgFYq4A9a2o5S1QbWkmYVFBh7LBQL8YvugdhieFg38",
  "aepLFer6JQBNmKwa5a87cEc2NpkyXfEQvxwTByZeGWs",
  "ThUGsoLWtoTCfb24AmQTKDVjTTUBbNrUrozupJeyPsy",
  "7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj",
  "AxM7a5HNmRNHbND6h5ZMSsU8n3NLa1tskoN6m5mAgVvL",
  "Cxse3YzRWNgAFtnhwXnve5HG71PWrYH8xM2bNo9JLGYp",
  "LnTRntk2kTfWEY6cVB8K9649pgJbt6dJLS1Ns1GZCWg",
  "pumpkinsEq8xENVZE6QgTS93EN4r9iKvNxNALS1ooyp",
  "CgnTSoL3DgY9SFHxcLj6CgCgKKoTBr6tp4CPAEWy25DE",
  "pSoLt7vmFJWnEyYxUACPRwJh4X2cfrMgYc2iZiJTwii",
  "GEJpt3Wjmr628FqXxTgxMce1pLntcPV4uFi8ksxMyPQh",
  "he1iusmfkpAdwvxLNGV8Y1iSbj4rUy6yMhEA3fotn9A",
  "edge86g9cVz87xcpKpy3J77vbp4wYd9idEV562CCntt",
  "fpSoL8EJ7UA5yJxFKWk1MFiWi35w8CbH36G5B9d7DsV",
  "3bfv2scCdbvumVBc3Sar5QhYXx7Ecsi8EFF2akjxe329",
  "D1gittVxgtszzY4fMwiTfM4Hp7uL5Tdi1S9LYaepAUUm",
  "pathdXw4He1Xk3eX84pDdDZnGKEme3GivBamGCVPZ5a",
  "jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v",
  "haSo1Vz5aTsqEnz8nisfnEsipvbAAWpgzRDh2WhhMEh",
  "HausGKcq9G9zM3azwNmgZyzUvYeeqR8h8663PmZpxuDj",
  "gangqfNY8fA7eQY3tHyjrevxHCLnhKRrLGRwUMBR4y6",
  "eon5tgYNk5FjJUcBUcLno49t2GfpmWZDzJHeYkbh9Zo",
  "J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn",
  "fmSoLKzBY6h9b5RQ67UVs7xE3Ym6mx2ChpPxHdoaVho",
  "spkyB5SzVaz2x3nNzSBuhpLSEF8otbRDbufc73fuLXg",
  "aeroXvCT6tjGVNyTvZy86tFDwE4sYsKCh7FbNDcrcxF",
  "BNso1VUJnh4zcfpZa6986Ea66P6TCp59hvtNJ8b1X85",
  "DrYLDtGzip1JzogBqcPwHRWpifczYDexpc9d9wnUv5M7",
  "BonK1YhkXEGLZzwtcvRTip3gAL9nCeQD7ppZBLXhtTs",
  "fuseYvhNJbSzdDByyTCrLcogsoNwAviB1WeewhbqgFc",
  "DUAL6T9pATmQUFPYmrWq2BkkGdRxLtERySGScYmbHMER",
  "khSoLqPRftqqDirah8NxBd9VZYfMJyPm3Xq5nXuLCyG",
  "SnKAf8aNjeYz8pY8itYn3VxFhT6Q8WNdPwy17s9USgC",
  "pWrSoLAhue6jUxUkbWgmEy5rD9VJzkFmvfTDV5KgNuu",
  "GRJQtWwdJmp5LLpy8JWjPgn5FnLyqSJGNhn5ZnCTFUwM",
];

export const stable_coins = [
  "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", // USDT
  "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB", // USDC
  "2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo", // PYUSD
  "USDSwr9ApdHk5bvJKMjzff41FfuX8bSxdKcR81vTwcA", // USDS
];
export const popular_program_id = {
  jupiter: [
    "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",
    "DCA265Vj8a9CEuX1eb1LWRnDT7uK6q1xMipnNyatn23M",
    "j1o2qRpjcyUwEvwtcfhEQefh773ZgjxcVRry7LDqg5X",
  ],
  tensor: [
    "TSWAPaqyCSx2KABk68Shruf4rp7CxcNi8hAsbdwmHbN",
    "TCMPhJdwDryooaGtiocG1u3xcYbRpiJzb283XfCZsDp",
  ],
  squads: [
    "SQDS4ep65T869zMMBKyuUq6aD6EgTu8psMjkvj52pCf",
    "SMPLecH534NA9acpos4G6x7uf3LWbCAwZQE9e8ZekMu",
  ],
  drift: [
    "dRiftyHA39MWEi3m9aunc5MzRF1JYuBsbn6VPcn33UH",
    "G6EoTTTgpkNBtVXo96EQp2m6uwwVh2Kt6YidjkmQqoha",
  ],
  token: [
    "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
    "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb",
  ],
};

export const provider = new Connection(
  "https://young-convincing-patron.solana-mainnet.quiknode.pro/"
);

// Jupiter JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4
// Tensor TSWAPaqyCSx2KABk68Shruf4rp7CxcNi8hAsbdwmHbN TCMPhJdwDryooaGtiocG1u3xcYbRpiJzb283XfCZsDp
// Squads SQDS4ep65T869zMMBKyuUq6aD6EgTu8psMjkvj52pCf SMPLecH534NA9acpos4G6x7uf3LWbCAwZQE9e8ZekMu
// Kamino FarmsPZpWu9i7Kky8tPN37rs2TpmMrAZrC7S7vJa91Hr KLend2g3cP87fffoy8q1mQqGKjrxjC8boSyAYavgmjD 6LtLpnUFNByNXLyCoK9wA2MykKAmQNZKBdY8s47dehDc
// Drift dRiftyHA39MWEi3m9aunc5MzRF1JYuBsbn6VPcn33UH
// Token TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb