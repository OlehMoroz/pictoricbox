import { WalletInteraction } from './WalletInteraction.js'

const wallet = new WalletInteraction()
window.addEventListener('DOMContentLoaded', wallet.initialize.bind(wallet))
