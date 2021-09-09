const getCarts = require('./datas/getCarts');
const getInfosUser = require('./datas/getInfosUser');
const getBuyerProtectionCost = require('./costs/getBuyerProtectionCost');
const getShippingCost = require('./costs/getShippingCost');

const hasToPayWithBankCard = async (cart) => {
    const products = cart.products;
    let totalWeight = 0;
    let totalPrice = 0;
    const userId = cart.userId;

    for (const product of products) {
        totalWeight += product.weight;
        totalPrice += product.price;
    }

    const buyerProtectionCost = await getBuyerProtectionCost(totalPrice);
    const shippingCost = await getShippingCost(totalPrice, totalWeight, userId);
    const walletBalance = (await getInfosUser(userId)).walletBalance;

    // console.log(cart, totalPrice, totalWeight, buyerProtectionCost, shippingCost, walletBalance)

    const result = totalPrice + buyerProtectionCost + shippingCost - walletBalance;

    return result < 0 ? 0 : result;
}

const start = async () => {
    const carts = await getCarts();

    const payWithBankCard0 = await hasToPayWithBankCard(carts[0]);
    const payWithBankCard1 = await hasToPayWithBankCard(carts[1]); // le cart est vide donc le user l'envoie vide avec 0 produit mais paie les quelques frais fixes
    const payWithBankCard2 = await hasToPayWithBankCard(carts[2]);
    const payWithBankCard3 = await hasToPayWithBankCard(carts[3]);
    const payWithBankCard4 = await hasToPayWithBankCard(carts[4]);
    const payWithBankCard5 = await hasToPayWithBankCard(carts[5]);
    const payWithBankCard6 = await hasToPayWithBankCard(carts[6]);
    const payWithBankCard7 = await hasToPayWithBankCard(carts[7]);
    const payWithBankCard8 = await hasToPayWithBankCard(carts[8]);
    const payWithBankCard9 = await hasToPayWithBankCard(carts[9]);

    console.log(payWithBankCard0, payWithBankCard1, payWithBankCard2, payWithBankCard3, payWithBankCard4, payWithBankCard5, payWithBankCard6, payWithBankCard7, payWithBankCard8, payWithBankCard9);
}

start();

module.exports = hasToPayWithBankCard;