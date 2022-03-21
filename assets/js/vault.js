let provider = undefined;
let signer = undefined;

async function vaultButtonClicked() {
    if (window.ethereum !== undefined) {
        // A Web3Provider wraps a standard Web3 provider, which is
        // what MetaMask injects as window.ethereum into each page
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        // MetaMask requires requesting permission to connect users accounts
        await provider.send("eth_requestAccounts", []);

        // The MetaMask plugin also allows signing transactions to
        // send ether and pay to change state within the blockchain.
        // For this, you need the account signer...
        const signer = provider.getSigner();

        if (signer) {
            const vaultButton = document.getElementById("vaultBtn");
            const vaultSection = document.getElementById("vault");

            vaultButton.textContent = "Connected!";
            vaultSection.style.display = "block";

            vaultSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start' //scroll to top of the target element
            });

            return true;
        }

        return false;
    }

    return false;
}

function formSubmit() {
    const vaultSection = document.getElementById("vault");
    vaultSection.style.display = "none";

    const email = document.getElementById("inputEmail4");
    const address = document.getElementById("inputAddress");
    const address2 = document.getElementById("inputAddress2");
    const city = document.getElementById("inputCity");
    const state = document.getElementById("inputState");
    const zip = document.getElementById("inputZip");

    // save .values to a local database
    // use these values for when the admin logs in
    // or
    // email these .values to the vault manager

    email.value = "";
    address.value = "";
    address2.value = "";
    city.value = "";
    state.value = "";
    zip.value = "";
}