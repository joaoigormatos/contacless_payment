const tokenInput = document.querySelector('.question input');

tokenInput.addEventListener('input', function (evt) {
  if (this.value.length === 10) {
    window.alert('accepted token, change page!!!')
    setTimeout(() => {
      console.warn('CHANGE MEEEEEEEEEEE!')
    }, 500)
  }
});
