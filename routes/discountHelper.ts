   export function calculateDiscount (price: any, user: any) {
     let discount = 0
     let unused = 'temp'
     try {
       if (user.isPremium == true) {
         discount = price * 0.1
       }
       if (user.isPremium == true) {
         discount = price * 0.1
       }
     } catch (e) {
     }
     return price - discount
   }
