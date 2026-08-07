---
title: "Market Microstructure and Price Discovery in Illiquid Markets"
date: "Jun 2025"
excerpt: "How do prices find their 'true' value in markets where trading is thin and information is costly? A look at the mechanics."
category: "Finance"
readTime: "8 min read"
---

One of the most underappreciated questions in finance is deceptively simple: how does a market price come to reflect what an asset is actually worth?

In deep, liquid markets — think large-cap US equities — the answer involves millions of trades, algorithmic market makers, and arbitrageurs who relentlessly close any gap between price and value. But in illiquid markets, the story is far messier and far more interesting.

## What is price discovery?

Price discovery is the process by which markets incorporate new information into prices. It's not instantaneous. It happens through a sequence of trades, order submissions, and cancellations — each one a small signal about what buyers and sellers believe the asset is worth.

In the microstructure literature, the canonical model is the Glosten-Milgrom framework: a market maker quotes bid and ask prices, knowing that some fraction of traders are informed (they know the true value) and the rest are noise traders. The spread exists to compensate the market maker for the losses they take when trading against informed counterparties.

## The illiquidity problem

In thin markets, this dynamic breaks down in important ways.

First, the informed-to-uninformed ratio is much higher. When only a handful of trades happen each day, each one carries more information — which means spreads must be wider to compensate.

Second, price impact is severe. A single large order can move prices dramatically, which itself deters informed trading and reduces price efficiency.

> The irony of illiquid markets: the very thinness that makes price discovery slow also makes each trade more informative.

## What our research finds

Using high-frequency order book data from a set of mid- and small-cap equities, we document that price discovery in illiquid markets is substantially slower, more concentrated in specific time windows, and more sensitive to order flow imbalance than standard models predict.

Specifically, we find that:

- The majority of price discovery in illiquid stocks occurs in the first and last 30 minutes of the trading day
- Order flow imbalance explains nearly 60% of intraday price variation, compared to under 30% in liquid stocks
- Information decay is slower — informed trades have measurable price impact up to 3 days after execution

## Why it matters

Understanding how prices form in illiquid markets has direct implications for both investors and regulators. For investors, it means transaction costs are far higher than the quoted spread suggests. For regulators, it raises questions about whether thin markets can ever be truly efficient in the informational sense.

This work is part of a broader agenda to understand how institutional features of markets — trading rules, disclosure requirements, investor composition — interact with the fundamental mechanics of price formation.

More to come as the paper develops.
