function searchStudents() {
    var input = document.querySelector('.search-box input');
    var filter = input.value.toUpperCase();
    var names = document.querySelectorAll('.name');
    for (var i = 0; i < names.length; i++) {
      var name = names[i].textContent.toUpperCase();
      if (filter && name.indexOf(filter) > -1) {
        names[i].classList.add('found');
      } else {
        names[i].classList.remove('found');
      }
    }
  } 