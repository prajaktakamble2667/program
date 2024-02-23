const printMenu = day => {
    switch (day.toLowerCase()) {
      case 'monday':
        console.log("Monday's Menu: Pohe");
        break;
      case 'tuesday':
        console.log("Tuesday's Menu: Idli Chatni");
        break;
      case 'wednesday':
        console.log("Wednesday's Menu: Chicken 65");
        break;
      case 'thursday':
        console.log("Thursday's Menu: Paneer");
        break;
      case 'friday':
        console.log("Friday's Menu: Pizza");
        break;
      case 'saturday':
        console.log("Saturday's Menu: French Fries");
        break;
      case 'sunday':
        console.log("Sunday's Menu: Biryani");
        break;
      default:
        console.log("Invalid day. Please enter a valid day of the week.");
    }
  };
  
  printMenu('sunday'); 
 
  
  