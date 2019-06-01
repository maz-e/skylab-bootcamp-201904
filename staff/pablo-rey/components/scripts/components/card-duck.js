"use strict";

class CardDuck extends Component {
  constructor({parent, duck, onSelect}) {
    super(document.createElement("li"));
    this.__parent__ = parent;
    this.onSelect = onSelect;
    this.baseClass = "duck-item";
    this.container.classList.add(this.baseClass);
    this.__parent__.insertAdjacentElement("beforeend", this.container);

    this.__duck__ = duck;
    this.refresh();
  }

  refresh() {
    if (!this.__duck__) {
      this.container.innerHTML = "<p>No duck</p>";
      return;
    }

    const img = document.createElement("img");
    img.src = this.__duck__.imageUrl;
    img.classList.add(this.baseClass + "__image");

    this.container.appendChild(img);

    const h3 = document.createElement("h3");
    h3.innerText = this.__duck__.title;
    h3.classList.add(this.baseClass + "__title");

    this.container.appendChild(h3);

    const priceTag = document.createElement("span");
    priceTag.innerText = this.__duck__.price;
    priceTag.classList.add(this.baseClass + "__price");
    this.container.appendChild(priceTag);
  }

  set duck(duck) { this.__duck__ = duck; }
  set onSelect(callback) {
        this.container.addEventListener(
          "click",
          function(event) {
            event.preventDefault();
            callback(this.__duck__);
          }.bind(this)
        );
    }
    
}
