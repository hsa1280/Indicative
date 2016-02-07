function firstNameFilter() {
    return function( data, input ) {
      var result = [];
      if(data) {
        data.forEach( user => {
            if( user.first_name.toLowerCase().includes(input.toLowerCase()) ) {
              result.push(user);
            }
        });
      }
      return result;
    }
}

export default firstNameFilter;
