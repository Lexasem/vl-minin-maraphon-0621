const container = document.querySelector('.container');

const firstPlaceholder = document.querySelector('.placeholder');
let itemsCount = document.querySelectorAll('.item').length;
const itemsNewPlace = document.createElement('div');
itemsNewPlace.className = 'item-new-place';


let hoveredPlaceholder;
let item;

const eventListeners = {
    dragstart: (e) => {
        const target = e.target.closest('.item');
        if (target) {
            item = target;
            item.classList.add('hold');
            setTimeout(() => item.classList.add('d-none'), 0);
        }
    },
    dragend: (e) => {
        if (hoveredPlaceholder) {
            hoveredPlaceholder.removeChild(itemsNewPlace);
            hoveredPlaceholder.prepend(item);
            hoveredPlaceholder = undefined;
        }

        if (item) {
            item.classList.remove('hold', 'd-none');
            item = undefined;
        }
    },
    dragenter: (e) => {
        const placeholder = e.target.closest('.placeholder');
        if (placeholder && placeholder !== hoveredPlaceholder) {
            if (hoveredPlaceholder) {
                hoveredPlaceholder.removeChild(itemsNewPlace);
            }
            hoveredPlaceholder = placeholder;
            hoveredPlaceholder.prepend(itemsNewPlace);
        }
    },
    click: (e) => {
        const target = e.target.closest('.add-btn');
        if (target) {
            itemsCount++;
            const newItem = document.createElement('div');
            newItem.innerHTML = `Перетащи меня <i class="item__index">${itemsCount}</i>`;
            newItem.className = 'item';
            newItem.draggable = true;
            firstPlaceholder.prepend(newItem);
        }

    }
};

Object.keys(eventListeners).forEach(eventType => {
    container.addEventListener(eventType, eventListeners[eventType]);
})

