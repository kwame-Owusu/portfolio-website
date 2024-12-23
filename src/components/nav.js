const wrapper = document.getElementById("nav");
const navItems = document.querySelectorAll('.nav-item');
const tabHighlight = document.getElementById("tab-highlight");

navItems.forEach((item) => {
  item.addEventListener('mouseover', (e) => {
    const wrapperBoundingBox = wrapper.getBoundingClientRect();
    const itemBoundingBox = e.target.getBoundingClientRect();
    const width = itemBoundingBox.right - itemBoundingBox.left;
    const height = itemBoundingBox.bottom - itemBoundingBox.top;
    const left = itemBoundingBox.left - wrapperBoundingBox.left;

    tabHighlight.style.width = `${width}px`;
    tabHighlight.style.height = `${height}px`;
    tabHighlight.style.left = `${left}px`;
    tabHighlight.style.opacity = '1';
  });

  item.addEventListener('mouseleave', (e) => {
    tabHighlight.style.opacity = '0';
  });
});
