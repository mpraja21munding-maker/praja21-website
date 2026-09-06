const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            const counter = entry.target;
            const target = Number(counter.dataset.target);
            let current = 0;
            const increment = target / 100;

            function updateCounter() {

                current += increment;

                if (current < target) {

                    const suffix = counter.dataset.suffix || "";
counter.textContent = Math.ceil(current) + suffix;

                    requestAnimationFrame(updateCounter);

                } else {

                    if (target === 100) {
                        counter.textContent = target + "%";
                    } else {
                        const suffix = counter.dataset.suffix || "";
counter.textContent = target + suffix;
                    }

                }

            }

            updateCounter();

            observer.unobserve(counter);

        }
    });
}, {
    threshold: 0.5
});

counters.forEach(counter => observer.observe(counter));