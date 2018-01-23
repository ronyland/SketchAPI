import { WrappedObject, DefinedPropertiesKey } from '../WrappedObject'
import { Page } from './Page'
import { Selection } from '../Selection'
import { toArray } from '../utils'
import { wrapObject } from '../wrapNativeObject'
import { Types } from '../enums'
import { Factory } from '../Factory'

/**
 * A Sketch document.
 */
export class Document extends WrappedObject {
  /**
   * Make a new document object.
   *
   * @param [Object] properties - The properties to set on the object as a JSON object.
   *                              If `sketchObject` is provided, will wrap it.
   *                              Otherwise, creates a new native object.
   */
  constructor(document = {}) {
    if (!document.sketchObject) {
      const app = NSDocumentController.sharedDocumentController()
      app.newDocument(Document)
      // eslint-disable-next-line no-param-reassign
      document.sketchObject = app.currentDocument()
    }

    super(document)
  }

  /**
   * The layers that the user has selected in the currently selected page.
   *
   * @return {Selection} A selection object representing the layers that the user has selected in the currently selected page.
   */
  get selectedLayers() {
    return new Selection(this.selectedPage)
  }

  /**
   * The current page that the user has selected.
   *
   * @return {Page} A page object representing the page that the user is currently viewing.
   */
  get selectedPage() {
    return Page.fromNative(this._object.currentPage())
  }

  /**
   * Returns a list of the pages in this document.
   *
   * @return {[Page]} The pages.
   */
  get pages() {
    const pages = toArray(this._object.pages())
    return pages.map(page => Page.fromNative(page))
  }

  /**
   * Find the first layer in this document which has the given id.
   *
   * @return {Layer} A layer object, if one was found.
   */
  getLayerWithID(layerId) {
    const layer = this._object.documentData().layerWithID_(layerId)
    if (layer) {
      return wrapObject(layer)
    }
    return undefined
  }

  /**
   * Find the first layer in this document which has the given name.
   *
   * @return {Layer} A layer object, if one was found.
   */
  getLayerNamed(layerName) {
    // As it happens, layerWithID also matches names, so we can implement
    // this method in the same way as layerWithID.
    // That might not always be true though, which is why the JS API splits
    // them into separate functions.

    const layer = this._object.documentData().layerWithID_(layerName)
    if (layer) {
      return wrapObject(layer)
    }
    return undefined
  }

  /**
   * Center the view of the document window on a given layer.
   *
   * @param {Layer} layer The layer to center on.
   */
  centerOnLayer(layer) {
    const wrappedLayer = wrapObject(layer)
    this._object.contentDrawView().centerRect_(wrappedLayer.sketchObject.rect())
  }
}

Document.type = Types.Document
Document[DefinedPropertiesKey] = { ...WrappedObject[DefinedPropertiesKey] }
Factory.registerClass(Document, MSDocumentData)