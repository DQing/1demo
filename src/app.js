const fixture = require('./fixtures');
const allItems = fixture.loadAllItems;
const allPromotions = fixture.loadPromotions;
const CartItem = require('./cart-items');
const ReceiptItems = require('./receipt-item');
const Receipt = require('./receipt');
const ReceiptText = require('./receipt-text');

function printReceipt(tags) {

  const cartItems = CartItem.buildCartItems(tags, allItems());

  const receiptItems = ReceiptItems.buildReceiptItems(cartItems, allPromotions());

  const receipt = Receipt.buildReceipt(receiptItems);

  const receiptText = ReceiptText.buildReceiptText(receipt);

  console.log(receiptText);
}

exports.printReceipt = printReceipt;
