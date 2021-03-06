import DomElement from "../element/DomElement";
export default class CarouselItem {
  constructor(options = {}) {
    this.content = options.content;
    this.caption = options.caption;
    this.style = options.style;
    this._carouselItem = new DomElement("div").workOnClassList(x =>
      x.add("carousel-item")
    ).setStyle(this.style);
    this._captionWrapper = new DomElement("div").workOnClassList(x =>
      x.add("carousel-caption", "d-none", "d-md-block")
    );
    this._carouselItem = this._fillCarouselItem().append(
      this._fillCaptionWrapper().get()
    ).get();
  }

  get = () => this._carouselItem;

  _fillCarouselItem = () => {
    if (typeof this.content === "string") {
      this._carouselItem = this._carouselItem.innerHTML(this.content);
    } else if (typeof this.content === "object" && this.content !== null) {
      this._carouselItem = this._carouselItem.append(this.content);
    }
    return this._carouselItem;
  };

  _fillCaptionWrapper = () => {
    if (typeof this.caption === "string") {
      this._captionWrapper = this._captionWrapper.innerHTML(this.caption);
    } else if (typeof this.caption === "object" && this.caption !== null) {
      this._captionWrapper = this._captionWrapper.append(this.caption);
    }
    return this._captionWrapper;
  };
}
