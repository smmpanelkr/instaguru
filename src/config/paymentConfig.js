// Payment Configuration - All payment related settings
const PAYMENT_CONFIG = {
  // UPI Configuration
  upiId: "insta999guru@ibl",
  
  // Amount Limits
  minimumAmount: 50,
  maximumAmount: 2500,
  
  // Default suggested amounts (will be calculated based on minimumAmount)
  getSuggestedAmounts: function() {
    return [
      this.minimumAmount,
      this.minimumAmount + 25,
      this.minimumAmount + 50,
      this.minimumAmount + 200
    ];
  },
  
  // Payment gateway settings
  paymentGateway: {
    name: "Razorpay",
    processingTime: "1-4 minutes"
  },
  
  // Transaction settings
  transaction: {
    prefix: "ORD",
    defaultNote: "Payment for services"
  }
};

export default PAYMENT_CONFIG;