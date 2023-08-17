export default function init() {
    const elements = document.querySelectorAll('a');

    const checkRoute = (e) => {
        const target = e.target;
        const targetHref = target.getAttribute('href');

        if (targetHref && window.location.pathname === targetHref) {
            e.preventDefault();
            return true;
        } else {
            return false;
        }
    };

    elements.forEach((el) => {
        el.addEventListener('click', (e) => checkRoute(e));
    });
}
