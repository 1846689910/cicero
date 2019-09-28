import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import "popper.js/dist/popper.min";
import "bootstrap/dist/js/bootstrap.min";
import DomElement from "../element/DomElement";
export default class Carousel {
  /**
   *
   * @param {string} id
   * @param {array} carouselItems : array<CarouselItem>
   * @param {object} options
   */
  constructor(id, carouselItems = [], options = {}) {
    this.id = id;
    this.carouselItems = this._setItemsActive(carouselItems);
    this.options = Object.assign(
      {},
      {
        withIndicators: true,
        withControl: true,
        style: {}
      },
      options
    );
    this._carousel = this._genCarousel();
    $(this._carousel).carousel();
  }

  get = () => this._carousel;

  _genCarousel = () => {
    const carousel = new DomElement("div")
      .set("id", this.id)
      .set("data-ride", "carousel")
      .workOnClassList(x => x.add("carousel", "slide"))
      .setStyle(this.options.style);
    const carouselInner = new DomElement("div")
      .workOnClassList(x => x.add("carousel-inner"))
      .append(...this.carouselItems.map(x => x.get()));

    if (this.options.withIndicators) {
      carousel.append(this._genCarouselIndicators().get());
    }

    carousel.append(carouselInner.get());

    if (this.options.withControl) {
      carousel.append(...this._genCarouselControl().map(x => x.get()));
    }

    return carousel.get();
  };

  /**
   * @param {array} carouselItems: array<CarouselItem>
   */
  _setItemsActive = carouselItems => {
    if (carouselItems.every(x => !x.get().classList.contains("active"))) {
      carouselItems[0].get().classList.add("active");
    }
    return carouselItems;
  };

  _genCarouselIndicators = () => {
    const ol = new DomElement("ol").workOnClassList(x =>
      x.add("carousel-indicators")
    );
    const lis = this.carouselItems.map((x, i) =>
      new DomElement("li")
        .set("data-target", `#${this.id}`)
        .set("data-slide-to", `${i}`)
        .workOnClassList(l =>
          x.get().classList.contains("active") ? l.add("active") : ""
        )
        .get()
    );
    return ol.append(...lis);
  };

  _genCarouselControl = () =>
    ["prev", "next"].map(d =>
      new DomElement("a")
        .set("href", `#${this.id}`)
        .set("role", "button")
        .set("data-slide", d)
        .workOnClassList(x => x.add(`carousel-control-${d}`))
        .append(
          new DomElement("span")
            .set("aria-hidden", "true")
            .workOnClassList(x => x.add(`carousel-control-${d}-icon`))
            .get(),
          new DomElement("span")
            .innerHTML(d)
            .workOnClassList(x => x.add("sr-only"))
            .get()
        )
    );
}
