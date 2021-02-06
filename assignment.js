// %githubLink
function kilometerToMeter(kilomiter) {
  // Check kilomiter perm. is a number

  if (typeof kilomiter == 'number') {
    // Check kilomiter perm. is a Negative number
    if (kilomiter < 0) {
      return "Error: Kilomter Don't have negative value, Please insert number up to 0"
    } else {
      var meter = kilomiter * 1000
      return meter
    }
  } else {
    return 'Error: Kilometer value must be a number, Please Insert Nember'
  }
}

function budgetCalculator(watch, phone, laptop) {
  var watchPrice = 50
  var phonePrice = 100
  var laptopPrice = 500

  // check watch input is number
  if (typeof watch === 'number') {
    // check phone input is number
    if (typeof phone === 'number') {
      // check Laptop input is number
      if (typeof laptop === 'number') {
        // check watch input number is less then 0
        if (watch < 0) {
          // check watch and  input number is less then 0
          if (phone < 0) {
            // check watch, phone and laptop input number is less then 0
            if (laptop < 0) {
              return "Error: watch , phone and laptop  Count Don't have negative value, if you don't want to buy this  product Please insert value 0"
            }
            return "Error: watch and phone  Count Don't have negative value, if you don't want to buy this  product Please insert value 0"
          }
          return "Error: watch  Count Don't have negative value, if you don't want to buy this  product Please insert value 0"
        }

        var watchCost = watchPrice * watch
        var phoneCost = phonePrice * phone
        var laptophCost = laptopPrice * laptop
        var totalCost = watchCost + phoneCost + laptophCost
        return totalCost
      } else {
        return 'Error: Please insert number, How many watch amd phone and laptop you want to buy'
      }
    } else {
      return 'Error: Please insert number, How many watch amd phone you want to buy'
    }
  } else {
    return 'Error: Please insert number, How many watch you want to buy'
  }
}

function hotelCost(day) {
  var firstDiscount = 20
  var hotelBill = 0

  // Check day perm. is a number
  if (typeof day == 'number') {
    // Check you stay hotel min 1 day
    if (day > 0) {
      // If You Stay in hotel between 1-10 days
      if (day <= 10) {
        hotelBill = day * 100
      }
      // If You Stay in hotel between 10-20 days
      else if (day <= 20) {
        var firstTendDayBill = 10 * 100
        var remainingDay = day - 10
        var secondPart = remainingDay * (100 - firstDiscount)
        hotelBill = secondPart + firstTendDayBill
      }
      // If You Stay in hotel between up to 20 days
      else {
        var firstTendDayBill = 10 * 100
        var secendTendDayBill = 10 * (100 - firstDiscount)
        var remainingDay = day - 20
        var lastBill = remainingDay * 50
        hotelBill = firstTendDayBill + secendTendDayBill + lastBill
      }
      return hotelBill
    }
    // If You did't Stay in hotel
    else if (day === 0) {
      return "Error: You did't stay here so your bill is 0"
    }
    // Show Error
    else {
      return "Error: Day dos't have negative number, Please insert number up to 1"
    }
  }
}
function megaFriend(frndArray) {
  // Check Perm. is an array
  if (Array.isArray(frndArray)) {
    var arraylength = frndArray.length
    var largeString = frndArray[0]
    var largeStringLength = largeString.length
    for (var i = 0; i < arraylength; i++) {
      var checkingLargName = frndArray[i]
      var checkingLargNameLength = checkingLargName.length
      if (largeStringLength < checkingLargNameLength) {
        largeStringLength = checkingLargNameLength
        largeString = checkingLargName
      }
    }
    return largeString
  } else {
    return 'Error: Please Insert an Array for get large name from Your Friend List'
  }
}
