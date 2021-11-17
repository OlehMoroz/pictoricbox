const kForwarderOrigin = 'http://pictoricboxnft.com'

export class WalletInteraction
{
  onboarding = new MetaMaskOnboarding({ kForwarderOrigin });

  onboardButtons = Array.from(document.getElementsByClassName('connectButton'));
  onboardDetails = Array.from(document.getElementsByClassName('connectDetails'));
  onboardAccount = Array.from(document.getElementsByClassName('connectAccount'));
  onboardChain = Array.from(document.getElementsByClassName('connectChain'));
  onboardNetwork = Array.from(document.getElementsByClassName('connectNetwork'));

  accounts = [];
  accountButtonsInitialized = false;

  constructor()
  {
	  gtag('config', 'G-4G1Y16E4QD');
  }

  get isMetaMaskInstalled()
  {
    const { ethereum } = window;
    return Boolean(ethereum && ethereum.isMetaMask);
  }

  get isMetaMaskConnected()
  {
    return this.accounts && this.accounts.length > 0
  }

  onClickInstall() // Start the onboarding proccess
  {
    this.onboardButtons.forEach(button => {
      button.innerText = 'loading…';
      button.disabled = true;
    });

    this.onboardDetails.forEach(details => {
      details.hidden = true;
    });

    this.onboarding.startOnboarding();
  }

  onClickConnect = async () => {
    try
    {
      const newAccounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
      this.handleNewAccounts(newAccounts);
    }
    catch (error)
    {
      console.error(error);
    }
  };

  handleNewAccounts(newAccounts)
  {
    this.accounts = newAccounts
    this.onboardAccount.forEach(account => {
      account.innerHTML = "<b>" + this.accounts + "</b>";
    });
    if (this.isMetaMaskConnected)
    {
      this.initializeAccountButtons();
	  gtag('event', 'wallet-connected');
    }
	else
	{
		gtag('event', 'wallet-disconnected');
	}
    this.validateUI();
  }

  handleNewChain (chainId)
  {
    this.onboardChain.forEach(chain => {
      chain.innerHTML = "Chain: <b>" + chainId + "</b>";
    });
  }

  handleNewNetwork (networkId)
  {
    this.onboardNetwork.forEach(network => {
      network.innerHTML = "Network: <b>" + networkId + "</b>";
    });
  }

  clearTextDisplays = () => {
    encryptionKeyDisplay.innerText = ''
    encryptMessageInput.value = ''
    ciphertextDisplay.innerText = ''
    cleartextDisplay.innerText = ''
  }

  validateUI()
  {
    this.onboardDetails.forEach(details => {
      details.hidden = true;
    });

    if (!this.isMetaMaskInstalled)
    {
      this.onboardButtons.forEach(button => {
        button.innerText = 'Install MetaMask';
        button.onclick = this.onClickInstall.bind(this);
        button.disabled = false;
      });
    }
    else if (this.isMetaMaskConnected)
    {
      this.onboardButtons.forEach(button => {
        button.innerText = 'connected';
        button.disabled = true;
      });
      this.onboardDetails.forEach(details => {
        details.hidden = false;
      });
      if (this.onboarding)
      {
        this.onboarding.stopOnboarding();
      }
    }
    else
    {
      this.onboardButtons.forEach(button => {
        button.innerText = 'connect my wallet';
        button.onclick = this.onClickConnect.bind(this);
        button.disabled = false;
      });
    }
  }

  initializeAccountButtons = () => {
    if (this.accountButtonsInitialized)
    {
      return
    }
    this.accountButtonsInitialized = true

    // Initialize mint button
  }

  async getNetworkAndChainId()
  {
    try
    {
      const chainId = await ethereum.request({
        method: 'eth_chainId',
      })
      this.handleNewChain(chainId)

      const networkId = await ethereum.request({
        method: 'net_version',
      })
      this.handleNewNetwork(networkId)
    }
    catch (err)
    {
      console.error(err)
    }
  }

  async initialize()
  {
    this.validateUI()

    if (this.isMetaMaskInstalled)
    {
      ethereum.autoRefreshOnNetworkChange = false
      this.getNetworkAndChainId()

      ethereum.on('chainChanged', this.handleNewChain.bind(this))
      ethereum.on('networkChanged', this.handleNewNetwork.bind(this))
      ethereum.on('accountsChanged', this.handleNewAccounts.bind(this))

      try
      {
        const newAccounts = await ethereum.request({
          method: 'eth_accounts',
        })
        this.handleNewAccounts(newAccounts)

        if (!this.isMetaMaskConnected)
        {
          this.onClickConnect()
        }
      }
      catch (err)
      {
        console.error('Error on init when getting accounts', err)
      }
    }
  }
};