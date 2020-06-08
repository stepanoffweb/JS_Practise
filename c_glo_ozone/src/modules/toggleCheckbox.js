export default function toggleCheckbox () {
  const checkbox = document.getElementById('discount-checkbox')

  checkbox.addEventListener('change', function () {
    if (this.checked) {
      this.nextElementSibling.classList.add('checked')
    } else {
      this.nextElementSibling.classList.remove('checked')
    }
  })
}
