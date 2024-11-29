# Trade Distributions

A collection of heatmap visualizations for select cryptocurrency trading pairs.

## 📚 Description

The purpose of this project is to analyze the price and volume distributions of select cryptocurrency trading pairs. The data was collected from [Coincap](https://coincap.io) using the companion project [Yampa](https://github.com/GoldToothRichards/yampa).

## 📊 Results

The results show a highly regular pattern in the volume distributions across different trading pairs. The number of trades for a given volume range within a 24-hour period appears to resemble a [Poisson distribution](https://en.wikipedia.org/wiki/Poisson_distribution) or a [Log-normal distribution](https://en.wikipedia.org/wiki/Log-normal_distribution), both of which are known to be [Maximum Entropy distributions](https://en.wikipedia.org/wiki/Maximum_entropy_probability_distribution).

## 🌟 Live Demo

Explore the results in the live demo - [https://trade-distributions.vercel.app](https://trade-distributions.vercel.app)

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build)
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## 🏗️ Local Development

To set up the project locally:

1. Clone the repository
2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Start the development server:

   ```bash
   pnpm run dev
   ```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
