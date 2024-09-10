import bootstrap from 'bootstrap/dist/js/bootstrap'

// initialization of Tooltips
export default function setTooltip() {
  const tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]'),
  )

  tooltipTriggerList.map((tooltipTriggerEl) => {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
}
