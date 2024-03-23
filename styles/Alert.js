export function Alert(message = 'Something went wrong, Try Again') {
    const markup = `<div class='fixed md:left-[43%] left-[30%] top-8 py-2 px-6 rounded-md bg-[#F6BD60] text-white animate-alert-animate opacity-90 z-[1000]'>${message}</div>`
    document.querySelector('.alert-active')?.insertAdjacentHTML('afterbegin', markup)
}
