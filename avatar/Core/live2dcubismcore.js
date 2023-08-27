/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Proprietary Software license
 * that can be found at https://www.live2d.com/eula/live2d-proprietary-software-license-agreement_en.html.
 */
export var Live2DCubismCore
;(function (Live2DCubismCore) {
  /** C calls. */
  var _csm = /** @class */ (function () {
    function _csm() {}
    _csm.getVersion = function () {
      return _em.ccall('csmGetVersion', 'number', [], [])
    }
    _csm.getLatestMocVersion = function () {
      return _em.ccall('csmGetLatestMocVersion', 'number', [], [])
    }
    _csm.getMocVersion = function (moc, mocSize) {
      return _em.ccall(
        'csmGetMocVersion',
        'number',
        ['number', 'number'],
        [moc, mocSize]
      )
    }
    _csm.getSizeofModel = function (moc) {
      return _em.ccall('csmGetSizeofModel', 'number', ['number'], [moc])
    }
    _csm.reviveMocInPlace = function (memory, mocSize) {
      return _em.ccall(
        'csmReviveMocInPlace',
        'number',
        ['number', 'number'],
        [memory, mocSize]
      )
    }
    _csm.initializeModelInPlace = function (moc, memory, modelSize) {
      return _em.ccall(
        'csmInitializeModelInPlace',
        'number',
        ['number', 'number', 'number'],
        [moc, memory, modelSize]
      )
    }
    _csm.hasMocConsistency = function (memory, mocSize) {
      return _em.ccall(
        'csmHasMocConsistency',
        'number',
        ['number', 'number'],
        [memory, mocSize]
      )
    }
    _csm.getParameterCount = function (model) {
      return _em.ccall('csmGetParameterCount', 'number', ['number'], [model])
    }
    _csm.getParameterIds = function (model) {
      return _em.ccall('csmGetParameterIds', 'number', ['number'], [model])
    }
    _csm.getParameterMinimumValues = function (model) {
      return _em.ccall(
        'csmGetParameterMinimumValues',
        'number',
        ['number'],
        [model]
      )
    }
    _csm.getParameterTypes = function (model) {
      return _em.ccall('csmGetParameterTypes', 'number', ['number'], [model])
    }
    _csm.getParameterMaximumValues = function (model) {
      return _em.ccall(
        'csmGetParameterMaximumValues',
        'number',
        ['number'],
        [model]
      )
    }
    _csm.getParameterDefaultValues = function (model) {
      return _em.ccall(
        'csmGetParameterDefaultValues',
        'number',
        ['number'],
        [model]
      )
    }
    _csm.getParameterValues = function (model) {
      return _em.ccall('csmGetParameterValues', 'number', ['number'], [model])
    }
    _csm.getParameterKeyCounts = function (model) {
      return _em.ccall(
        'csmGetParameterKeyCounts',
        'number',
        ['number'],
        [model]
      )
    }
    _csm.getParameterKeyValues = function (model) {
      return _em.ccall(
        'csmGetParameterKeyValues',
        'number',
        ['number'],
        [model]
      )
    }
    _csm.getPartCount = function (model) {
      return _em.ccall('csmGetPartCount', 'number', ['number'], [model])
    }
    _csm.getPartIds = function (model) {
      return _em.ccall('csmGetPartIds', 'number', ['number'], [model])
    }
    _csm.getPartOpacities = function (model) {
      return _em.ccall('csmGetPartOpacities', 'number', ['number'], [model])
    }
    _csm.getPartParentPartIndices = function (model) {
      return _em.ccall(
        'csmGetPartParentPartIndices',
        'number',
        ['number'],
        [model]
      )
    }
    _csm.getDrawableCount = function (model) {
      return _em.ccall('csmGetDrawableCount', 'number', ['number'], [model])
    }
    _csm.getDrawableIds = function (model) {
      return _em.ccall('csmGetDrawableIds', 'number', ['number'], [model])
    }
    _csm.getDrawableConstantFlags = function (model) {
      return _em.ccall(
        'csmGetDrawableConstantFlags',
        'number',
        ['number'],
        [model]
      )
    }
    _csm.getDrawableDynamicFlags = function (model) {
      return _em.ccall(
        'csmGetDrawableDynamicFlags',
        'number',
        ['number'],
        [model]
      )
    }
    _csm.getDrawableTextureIndices = function (model) {
      return _em.ccall(
        'csmGetDrawableTextureIndices',
        'number',
        ['number'],
        [model]
      )
    }
    _csm.getDrawableDrawOrders = function (model) {
      return _em.ccall(
        'csmGetDrawableDrawOrders',
        'number',
        ['number'],
        [model]
      )
    }
    _csm.getDrawableRenderOrders = function (model) {
      return _em.ccall(
        'csmGetDrawableRenderOrders',
        'number',
        ['number'],
        [model]
      )
    }
    _csm.getDrawableOpacities = function (model) {
      return _em.ccall('csmGetDrawableOpacities', 'number', ['number'], [model])
    }
    _csm.getDrawableMaskCounts = function (model) {
      return _em.ccall(
        'csmGetDrawableMaskCounts',
        'number',
        ['number'],
        [model]
      )
    }
    _csm.getDrawableMasks = function (model) {
      return _em.ccall('csmGetDrawableMasks', 'number', ['number'], [model])
    }
    _csm.getDrawableVertexCounts = function (model) {
      return _em.ccall(
        'csmGetDrawableVertexCounts',
        'number',
        ['number'],
        [model]
      )
    }
    _csm.getDrawableVertexPositions = function (model) {
      return _em.ccall(
        'csmGetDrawableVertexPositions',
        'number',
        ['number'],
        [model]
      )
    }
    _csm.getDrawableVertexUvs = function (model) {
      return _em.ccall('csmGetDrawableVertexUvs', 'number', ['number'], [model])
    }
    _csm.getDrawableIndexCounts = function (model) {
      return _em.ccall(
        'csmGetDrawableIndexCounts',
        'number',
        ['number'],
        [model]
      )
    }
    _csm.getDrawableIndices = function (model) {
      return _em.ccall('csmGetDrawableIndices', 'number', ['number'], [model])
    }
    _csm.getDrawableMultiplyColors = function (model) {
      return _em.ccall(
        'csmGetDrawableMultiplyColors',
        'number',
        ['number'],
        [model]
      )
    }
    _csm.getDrawableScreenColors = function (model) {
      return _em.ccall(
        'csmGetDrawableScreenColors',
        'number',
        ['number'],
        [model]
      )
    }
    _csm.getDrawableParentPartIndices = function (model) {
      return _em.ccall(
        'csmGetDrawableParentPartIndices',
        'number',
        ['number'],
        [model]
      )
    }
    _csm.mallocMoc = function (mocSize) {
      return _em.ccall('csmMallocMoc', 'number', ['number'], [mocSize])
    }
    _csm.mallocModelAndInitialize = function (moc) {
      return _em.ccall(
        'csmMallocModelAndInitialize',
        'number',
        ['number'],
        [moc]
      )
    }
    _csm.malloc = function (size) {
      return _em.ccall('csmMalloc', 'number', ['number'], [size])
    }
    _csm.setLogFunction = function (handler) {
      _em.ccall('csmSetLogFunction', null, ['number'], [handler])
    }
    _csm.updateModel = function (model) {
      _em.ccall('csmUpdateModel', null, ['number'], [model])
    }
    _csm.readCanvasInfo = function (
      model,
      outSizeInPixels,
      outOriginInPixels,
      outPixelsPerUnit
    ) {
      _em.ccall(
        'csmReadCanvasInfo',
        null,
        ['number', 'number', 'number', 'number'],
        [model, outSizeInPixels, outOriginInPixels, outPixelsPerUnit]
      )
    }
    _csm.resetDrawableDynamicFlags = function (model) {
      _em.ccall('csmResetDrawableDynamicFlags', null, ['number'], [model])
    }
    _csm.free = function (memory) {
      _em.ccall('csmFree', null, ['number'], [memory])
    }
    _csm.initializeAmountOfMemory = function (size) {
      _em.ccall('csmInitializeAmountOfMemory', null, ['number'], [size])
    }
    return _csm
  })()
  /** Necessary alignment for mocs (in bytes). */
  Live2DCubismCore.AlignofMoc = 64
  /** Necessary alignment for models (in bytes). */
  Live2DCubismCore.AlignofModel = 16
  /** .moc3 file version Unknown */
  Live2DCubismCore.MocVersion_Unknown = 0
  /** .moc3 file version 3.0.00 - 3.2.07 */
  Live2DCubismCore.MocVersion_30 = 1
  /** .moc3 file version 3.3.00 - 3.3.03 */
  Live2DCubismCore.MocVersion_33 = 2
  /** .moc3 file version 4.0.00 - 4.1.05 */
  Live2DCubismCore.MocVersion_40 = 3
  /** .moc3 file version 4.2.00 - */
  Live2DCubismCore.MocVersion_42 = 4
  /** Normal Parameter. */
  Live2DCubismCore.ParameterType_Normal = 0
  /** Parameter for blend shape. */
  Live2DCubismCore.ParameterType_BlendShape = 1

  /** Cubism version. */
  var Version = /** @class */ (function () {
    function Version() {}
    /**
     * Queries Core version.
     *
     * @return Core version.
     */
    Version.csmGetVersion = function () {
      return _csm.getVersion()
    }
    /**
     * Gets Moc file supported latest version.
     *
     * @return Moc file latest format version.
     */
    Version.csmGetLatestMocVersion = function () {
      return _csm.getLatestMocVersion()
    }
    /**
     * Gets Moc file format version.
     *
     * @param moc Moc
     *
     * @return csmMocVersion
     */
    Version.csmGetMocVersion = function (moc, mocBytes) {
      return _csm.getMocVersion(moc._ptr, mocBytes.byteLength)
    }
    return Version
  })()
  Live2DCubismCore.Version = Version
  /** Cubism logging. */
  var Logging = /** @class */ (function () {
    function Logging() {}
    /**
     * Sets log handler.
     *
     * @param handler  Handler to use.
     */
    Logging.csmSetLogFunction = function (handler) {
      // Cache log handler.
      Logging.logFunction = handler
      // Wrap function to pointer.
      var pointer = _em.addFunction(Logging.wrapLogFunction, 'vi')
      // Sets log handler.
      _csm.setLogFunction(pointer)
    }
    /**
     * Queries log handler.
     *
     * @return Log handler.
     */
    Logging.csmGetLogFunction = function () {
      return Logging.logFunction
    }
    /**
     * Wrap log function.
     *
     * @param messagePtr number
     *
     * @return string
     */
    Logging.wrapLogFunction = function (messagePtr) {
      // Pointer to string.
      var messageStr = _em.UTF8ToString(messagePtr)
      // Run log function.
      Logging.logFunction(messageStr)
    }
    return Logging
  })()
  Live2DCubismCore.Logging = Logging
  /** Cubism moc. */
  var Moc = /** @class */ (function () {
    /**
     * Initializes instance.
     *
     * @param mocBytes Moc bytes.
     */
    function Moc(mocBytes) {
      // Allocate memory.
      var memory = _csm.mallocMoc(mocBytes.byteLength)
      if (!memory) {
        return
      }
      // Initialize memory.
      var destination = new Uint8Array(
        _em.HEAPU8.buffer,
        memory,
        mocBytes.byteLength
      )
      destination.set(new Uint8Array(mocBytes))
      // Revive moc.
      this._ptr = _csm.reviveMocInPlace(memory, mocBytes.byteLength)
      if (!this._ptr) {
        _csm.free(memory)
      }
    }
    /**
     * Checks consistency of a moc.
     *
     * @param mocBytes Moc bytes.
     *
     * @returns '1' if Moc is valid; '0' otherwise.
     */
    Moc.prototype.hasMocConsistency = function (mocBytes) {
      // Allocate memory.
      var memory = _csm.mallocMoc(mocBytes.byteLength)
      if (!memory) {
        return
      }
      // Initialize memory.
      var destination = new Uint8Array(
        _em.HEAPU8.buffer,
        memory,
        mocBytes.byteLength
      )
      destination.set(new Uint8Array(mocBytes))
      var hasConsistency = _csm.hasMocConsistency(memory, mocBytes.byteLength)
      _csm.free(memory)
      return hasConsistency
    }
    /** Creates [[Moc]] from [[ArrayBuffer]].
     *
     * @param buffer Array buffer
     *
     * @return [[Moc]] on success; [[null]] otherwise.
     */
    Moc.fromArrayBuffer = function (buffer) {
      if (!buffer) {
        return null
      }
      var moc = new Moc(buffer)
      return moc._ptr ? moc : null
    }
    /** Releases instance. */
    Moc.prototype._release = function () {
      _csm.free(this._ptr)
      this._ptr = 0
    }
    return Moc
  })()
  Live2DCubismCore.Moc = Moc
  /** Cubism model. */
  var Model = /** @class */ (function () {
    /**
     * Initializes instance.
     *
     * @param moc Moc
     */
    function Model(moc) {
      this._ptr = _csm.mallocModelAndInitialize(moc._ptr)
      if (!this._ptr) {
        return
      }
      this.parameters = new Parameters(this._ptr)
      this.parts = new Parts(this._ptr)
      this.drawables = new Drawables(this._ptr)
      this.canvasinfo = new CanvasInfo(this._ptr)
    }
    /**
     * Creates [[Model]] from [[Moc]].
     *
     * @param moc Moc
     *
     * @return [[Model]] on success; [[null]] otherwise.
     */
    Model.fromMoc = function (moc) {
      var model = new Model(moc)
      return model._ptr ? model : null
    }
    /** Updates instance. */
    Model.prototype.update = function () {
      _csm.updateModel(this._ptr)
    }
    /** Releases instance. */
    Model.prototype.release = function () {
      _csm.free(this._ptr)
      this._ptr = 0
    }
    return Model
  })()
  Live2DCubismCore.Model = Model
  /** Canvas information interface. */
  var CanvasInfo = /** @class */ (function () {
    /**
     * Initializes instance.
     *
     * @param modelPtr Native model pointer.
     */
    function CanvasInfo(modelPtr) {
      if (!modelPtr) {
        return
      }
      // Preserve the pointer ant heap for get data throw args.
      var _canvasSize_data = new Float32Array(2)
      var _canvasSize_nDataBytes =
        _canvasSize_data.length * _canvasSize_data.BYTES_PER_ELEMENT
      var _canvasSize_dataPtr = _csm.malloc(_canvasSize_nDataBytes)
      var _canvasSize_dataHeap = new Uint8Array(
        _em.HEAPU8.buffer,
        _canvasSize_dataPtr,
        _canvasSize_nDataBytes
      )
      _canvasSize_dataHeap.set(new Uint8Array(_canvasSize_data.buffer))
      var _canvasOrigin_data = new Float32Array(2)
      var _canvasOrigin_nDataBytes =
        _canvasOrigin_data.length * _canvasOrigin_data.BYTES_PER_ELEMENT
      var _canvasOrigin_dataPtr = _csm.malloc(_canvasOrigin_nDataBytes)
      var _canvasOrigin_dataHeap = new Uint8Array(
        _em.HEAPU8.buffer,
        _canvasOrigin_dataPtr,
        _canvasOrigin_nDataBytes
      )
      _canvasOrigin_dataHeap.set(new Uint8Array(_canvasOrigin_data.buffer))
      var _canvasPPU_data = new Float32Array(1)
      var _canvasPPU_nDataBytes =
        _canvasPPU_data.length * _canvasPPU_data.BYTES_PER_ELEMENT
      var _canvasPPU_dataPtr = _csm.malloc(_canvasPPU_nDataBytes)
      var _canvasPPU_dataHeap = new Uint8Array(
        _em.HEAPU8.buffer,
        _canvasPPU_dataPtr,
        _canvasPPU_nDataBytes
      )
      _canvasPPU_dataHeap.set(new Uint8Array(_canvasPPU_data.buffer))
      // Call function and get result
      _csm.readCanvasInfo(
        modelPtr,
        _canvasSize_dataHeap.byteOffset,
        _canvasOrigin_dataHeap.byteOffset,
        _canvasPPU_dataHeap.byteOffset
      )
      _canvasSize_data = new Float32Array(
        _canvasSize_dataHeap.buffer,
        _canvasSize_dataHeap.byteOffset,
        _canvasSize_dataHeap.length
      )
      _canvasOrigin_data = new Float32Array(
        _canvasOrigin_dataHeap.buffer,
        _canvasOrigin_dataHeap.byteOffset,
        _canvasOrigin_dataHeap.length
      )
      _canvasPPU_data = new Float32Array(
        _canvasPPU_dataHeap.buffer,
        _canvasPPU_dataHeap.byteOffset,
        _canvasPPU_dataHeap.length
      )
      this.CanvasWidth = _canvasSize_data[0]
      this.CanvasHeight = _canvasSize_data[1]
      this.CanvasOriginX = _canvasOrigin_data[0]
      this.CanvasOriginY = _canvasOrigin_data[1]
      this.PixelsPerUnit = _canvasPPU_data[0]
      // Free heap memory
      _csm.free(_canvasSize_dataHeap.byteOffset)
      _csm.free(_canvasOrigin_dataHeap.byteOffset)
      _csm.free(_canvasPPU_dataHeap.byteOffset)
    }
    return CanvasInfo
  })()
  Live2DCubismCore.CanvasInfo = CanvasInfo
  /** Cubism model parameters */
  var Parameters = /** @class */ (function () {
    /**
     * Initializes instance.
     *
     * @param modelPtr Native model.
     */
    function Parameters(modelPtr) {
      var length = 0
      var length2 = null
      this.count = _csm.getParameterCount(modelPtr)
      length = _csm.getParameterCount(modelPtr)
      this.ids = new Array(length)
      var _ids = new Uint32Array(
        _em.HEAPU32.buffer,
        _csm.getParameterIds(modelPtr),
        length
      )
      for (var i = 0; i < _ids.length; i++) {
        this.ids[i] = _em.UTF8ToString(_ids[i])
      }
      length = _csm.getParameterCount(modelPtr)
      this.minimumValues = new Float32Array(
        _em.HEAPF32.buffer,
        _csm.getParameterMinimumValues(modelPtr),
        length
      )
      length = _csm.getParameterCount(modelPtr)
      this.types = new Int32Array(
        _em.HEAP32.buffer,
        _csm.getParameterTypes(modelPtr),
        length
      )
      length = _csm.getParameterCount(modelPtr)
      this.maximumValues = new Float32Array(
        _em.HEAPF32.buffer,
        _csm.getParameterMaximumValues(modelPtr),
        length
      )
      length = _csm.getParameterCount(modelPtr)
      this.defaultValues = new Float32Array(
        _em.HEAPF32.buffer,
        _csm.getParameterDefaultValues(modelPtr),
        length
      )
      length = _csm.getParameterCount(modelPtr)
      this.values = new Float32Array(
        _em.HEAPF32.buffer,
        _csm.getParameterValues(modelPtr),
        length
      )
      length = _csm.getParameterCount(modelPtr)
      this.keyCounts = new Int32Array(
        _em.HEAP32.buffer,
        _csm.getParameterKeyCounts(modelPtr),
        length
      )
      length = _csm.getParameterCount(modelPtr)
      length2 = new Int32Array(
        _em.HEAP32.buffer,
        _csm.getParameterKeyCounts(modelPtr),
        length
      )
      this.keyValues = new Array(length)
      var _keyValues = new Uint32Array(
        _em.HEAPU32.buffer,
        _csm.getParameterKeyValues(modelPtr),
        length
      )
      for (var i = 0; i < _keyValues.length; i++) {
        this.keyValues[i] = new Float32Array(
          _em.HEAPF32.buffer,
          _keyValues[i],
          length2[i]
        )
      }
    }
    return Parameters
  })()
  Live2DCubismCore.Parameters = Parameters
  /** Cubism model parts */
  var Parts = /** @class */ (function () {
    /**
     * Initializes instance.
     *
     * @param modelPtr Native model.
     */
    function Parts(modelPtr) {
      var length = 0
      this.count = _csm.getPartCount(modelPtr)
      length = _csm.getPartCount(modelPtr)
      this.ids = new Array(length)
      var _ids = new Uint32Array(
        _em.HEAPU32.buffer,
        _csm.getPartIds(modelPtr),
        length
      )
      for (var i = 0; i < _ids.length; i++) {
        this.ids[i] = _em.UTF8ToString(_ids[i])
      }
      length = _csm.getPartCount(modelPtr)
      this.opacities = new Float32Array(
        _em.HEAPF32.buffer,
        _csm.getPartOpacities(modelPtr),
        length
      )
      length = _csm.getPartCount(modelPtr)
      this.parentIndices = new Int32Array(
        _em.HEAP32.buffer,
        _csm.getPartParentPartIndices(modelPtr),
        length
      )
    }
    return Parts
  })()
  Live2DCubismCore.Parts = Parts
  /** Cubism model drawables */
  var Drawables = /** @class */ (function () {
    /**
     * Initializes instance.
     *
     * @param modelPtr Native model.
     */
    function Drawables(modelPtr) {
      this._modelPtr = modelPtr
      var length = 0
      var length2 = null
      this.count = _csm.getDrawableCount(modelPtr)
      length = _csm.getDrawableCount(modelPtr)
      this.ids = new Array(length)
      var _ids = new Uint32Array(
        _em.HEAPU32.buffer,
        _csm.getDrawableIds(modelPtr),
        length
      )
      for (var i = 0; i < _ids.length; i++) {
        this.ids[i] = _em.UTF8ToString(_ids[i])
      }
      length = _csm.getDrawableCount(modelPtr)
      this.constantFlags = new Uint8Array(
        _em.HEAPU8.buffer,
        _csm.getDrawableConstantFlags(modelPtr),
        length
      )
      length = _csm.getDrawableCount(modelPtr)
      this.dynamicFlags = new Uint8Array(
        _em.HEAPU8.buffer,
        _csm.getDrawableDynamicFlags(modelPtr),
        length
      )
      length = _csm.getDrawableCount(modelPtr)
      this.textureIndices = new Int32Array(
        _em.HEAP32.buffer,
        _csm.getDrawableTextureIndices(modelPtr),
        length
      )
      length = _csm.getDrawableCount(modelPtr)
      this.drawOrders = new Int32Array(
        _em.HEAP32.buffer,
        _csm.getDrawableDrawOrders(modelPtr),
        length
      )
      length = _csm.getDrawableCount(modelPtr)
      this.renderOrders = new Int32Array(
        _em.HEAP32.buffer,
        _csm.getDrawableRenderOrders(modelPtr),
        length
      )
      length = _csm.getDrawableCount(modelPtr)
      this.opacities = new Float32Array(
        _em.HEAPF32.buffer,
        _csm.getDrawableOpacities(modelPtr),
        length
      )
      length = _csm.getDrawableCount(modelPtr)
      this.maskCounts = new Int32Array(
        _em.HEAP32.buffer,
        _csm.getDrawableMaskCounts(modelPtr),
        length
      )
      length = _csm.getDrawableCount(modelPtr)
      this.vertexCounts = new Int32Array(
        _em.HEAP32.buffer,
        _csm.getDrawableVertexCounts(modelPtr),
        length
      )
      length = _csm.getDrawableCount(modelPtr)
      this.indexCounts = new Int32Array(
        _em.HEAP32.buffer,
        _csm.getDrawableIndexCounts(modelPtr),
        length
      )
      length = _csm.getDrawableCount(modelPtr)
      this.multiplyColors = new Float32Array(
        _em.HEAPF32.buffer,
        _csm.getDrawableMultiplyColors(modelPtr),
        length * 4
      )
      length = _csm.getDrawableCount(modelPtr)
      this.screenColors = new Float32Array(
        _em.HEAPF32.buffer,
        _csm.getDrawableScreenColors(modelPtr),
        length * 4
      )
      length = _csm.getDrawableCount(modelPtr)
      this.parentPartIndices = new Int32Array(
        _em.HEAP32.buffer,
        _csm.getDrawableParentPartIndices(modelPtr),
        length
      )
      length = _csm.getDrawableCount(modelPtr)
      length2 = new Int32Array(
        _em.HEAP32.buffer,
        _csm.getDrawableMaskCounts(modelPtr),
        length
      )
      this.masks = new Array(length)
      var _masks = new Uint32Array(
        _em.HEAPU32.buffer,
        _csm.getDrawableMasks(modelPtr),
        length
      )
      for (var i = 0; i < _masks.length; i++) {
        this.masks[i] = new Int32Array(_em.HEAP32.buffer, _masks[i], length2[i])
      }
      length = _csm.getDrawableCount(modelPtr)
      length2 = new Int32Array(
        _em.HEAP32.buffer,
        _csm.getDrawableVertexCounts(modelPtr),
        length
      )
      this.vertexPositions = new Array(length)
      var _vertexPositions = new Uint32Array(
        _em.HEAPU32.buffer,
        _csm.getDrawableVertexPositions(modelPtr),
        length
      )
      for (var i = 0; i < _vertexPositions.length; i++) {
        this.vertexPositions[i] = new Float32Array(
          _em.HEAPF32.buffer,
          _vertexPositions[i],
          length2[i] * 2
        )
      }
      length = _csm.getDrawableCount(modelPtr)
      length2 = new Int32Array(
        _em.HEAP32.buffer,
        _csm.getDrawableVertexCounts(modelPtr),
        length
      )
      this.vertexUvs = new Array(length)
      var _vertexUvs = new Uint32Array(
        _em.HEAPU32.buffer,
        _csm.getDrawableVertexUvs(modelPtr),
        length
      )
      for (var i = 0; i < _vertexUvs.length; i++) {
        this.vertexUvs[i] = new Float32Array(
          _em.HEAPF32.buffer,
          _vertexUvs[i],
          length2[i] * 2
        )
      }
      length = _csm.getDrawableCount(modelPtr)
      length2 = new Int32Array(
        _em.HEAP32.buffer,
        _csm.getDrawableIndexCounts(modelPtr),
        length
      )
      this.indices = new Array(length)
      var _indices = new Uint32Array(
        _em.HEAPU32.buffer,
        _csm.getDrawableIndices(modelPtr),
        length
      )
      for (var i = 0; i < _indices.length; i++) {
        this.indices[i] = new Uint16Array(
          _em.HEAPU16.buffer,
          _indices[i],
          length2[i]
        )
      }
    }
    /** Resets all dynamic drawable flags.. */
    Drawables.prototype.resetDynamicFlags = function () {
      _csm.resetDrawableDynamicFlags(this._modelPtr)
    }
    return Drawables
  })()
  Live2DCubismCore.Drawables = Drawables
  /** Utility functions. */
  var Utils = /** @class */ (function () {
    function Utils() {}
    /**
     * Checks whether flag is set in bitfield.
     *
     * @param bitfield Bitfield to query against.
     *
     * @return [[true]] if bit set; [[false]] otherwise
     */
    Utils.hasBlendAdditiveBit = function (bitfield) {
      return (bitfield & (1 << 0)) == 1 << 0
    }
    /**
     * Checks whether flag is set in bitfield.
     *
     * @param bitfield Bitfield to query against.
     *
     * @return [[true]] if bit set; [[false]] otherwise
     */
    Utils.hasBlendMultiplicativeBit = function (bitfield) {
      return (bitfield & (1 << 1)) == 1 << 1
    }
    /**
     * Checks whether flag is set in bitfield.
     *
     * @param bitfield Bitfield to query against.
     *
     * @return [[true]] if bit set; [[false]] otherwise
     */
    Utils.hasIsDoubleSidedBit = function (bitfield) {
      return (bitfield & (1 << 2)) == 1 << 2
    }
    /**
     * Checks whether flag is set in bitfield.
     *
     * @param bitfield Bitfield to query against.
     *
     * @return [[true]] if bit set; [[false]] otherwise
     */
    Utils.hasIsInvertedMaskBit = function (bitfield) {
      return (bitfield & (1 << 3)) == 1 << 3
    }
    /**
     * Checks whether flag is set in bitfield.
     *
     * @param bitfield Bitfield to query against.
     *
     * @return [[true]] if bit set; [[false]] otherwise
     */
    Utils.hasIsVisibleBit = function (bitfield) {
      return (bitfield & (1 << 0)) == 1 << 0
    }
    /**
     * Checks whether flag is set in bitfield.
     *
     * @param bitfield Bitfield to query against.
     *
     * @return [[true]] if bit set; [[false]] otherwise
     */
    Utils.hasVisibilityDidChangeBit = function (bitfield) {
      return (bitfield & (1 << 1)) == 1 << 1
    }
    /**
     * Checks whether flag is set in bitfield.
     *
     * @param bitfield Bitfield to query against.
     *
     * @return [[true]] if bit set; [[false]] otherwise
     */
    Utils.hasOpacityDidChangeBit = function (bitfield) {
      return (bitfield & (1 << 2)) == 1 << 2
    }
    /**
     * Checks whether flag is set in bitfield.
     *
     * @param bitfield Bitfield to query against.
     *
     * @return [[true]] if bit set; [[false]] otherwise
     */
    Utils.hasDrawOrderDidChangeBit = function (bitfield) {
      return (bitfield & (1 << 3)) == 1 << 3
    }
    /**
     * Checks whether flag is set in bitfield.
     *
     * @param bitfield Bitfield to query against.
     *
     * @return [[true]] if bit set; [[false]] otherwise
     */
    Utils.hasRenderOrderDidChangeBit = function (bitfield) {
      return (bitfield & (1 << 4)) == 1 << 4
    }
    /**
     * Checks whether flag is set in bitfield.
     *
     * @param bitfield Bitfield to query against.
     *
     * @return [[true]] if bit set; [[false]] otherwise
     */
    Utils.hasVertexPositionsDidChangeBit = function (bitfield) {
      return (bitfield & (1 << 5)) == 1 << 5
    }
    /**
     * Checks whether flag is set in bitfield.
     *
     * @param bitfield Bitfield to query against.
     *
     * @return [[true]] if bit set; [[false]] otherwise
     */
    Utils.hasBlendColorDidChangeBit = function (bitfield) {
      return (bitfield & (1 << 6)) == 1 << 6
    }
    return Utils
  })()
  Live2DCubismCore.Utils = Utils
  /** Memory functions. */
  var Memory = /** @class */ (function () {
    function Memory() {}
    /**
     * HACK:
     * Extend memory size allocated during module initialization.
     * If the specified size is less than or equal to 16777216(byte), the default of 16 MB is allocated.
     *
     * @see https://github.com/emscripten-core/emscripten/blob/main/src/settings.js#L161
     *
     * @param size allocated memory size [byte(s)]
     */
    Memory.initializeAmountOfMemory = function (size) {
      if (size > 16777216) {
        _csm.initializeAmountOfMemory(size)
      }
    }
    return Memory
  })()
  Live2DCubismCore.Memory = Memory
  /** Emscripten Cubism Core module. */
  var _em_module = (function () {
    var _scriptDir =
      'undefined' != typeof document && document.currentScript
        ? document.currentScript.src
        : void 0
    return function (_em_module) {
      _em_module = _em_module || {}
      var b,
        m,
        e = {}
      for (m in (b = b || (void 0 !== _em_module ? _em_module : {})))
        b.hasOwnProperty(m) && (e[m] = b[m])
      var w,
        z,
        A,
        v,
        x,
        r = !1,
        n = 'object' == typeof window,
        q = 'function' == typeof importScripts,
        r =
          'object' == typeof process &&
          'object' == typeof process.versions &&
          'string' == typeof process.versions.node &&
          !n &&
          !q,
        t = !n && !r && !q,
        u = '',
        G =
          (r
            ? ((u = __dirname + '/'),
              (v = function (a, c) {
                var d = B(a)
                return (
                  d ||
                    ((z = z || require('fs')),
                    (a = (A = A || require('path')).normalize(a)),
                    (d = z.readFileSync(a))),
                  c ? d : d.toString()
                )
              }),
              (x = function (a) {
                return (
                  assert(
                    (a = (a = v(a, !0)).buffer ? a : new Uint8Array(a)).buffer
                  ),
                  a
                )
              }),
              1 < process.argv.length && process.argv[1].replace(/\\/g, '/'),
              process.argv.slice(2),
              process.on('uncaughtException', function (a) {
                throw a
              }),
              process.on('unhandledRejection', C),
              (b.inspect = function () {
                return '[Emscripten Module object]'
              }))
            : t
            ? ('undefined' != typeof read &&
                (v = function (a) {
                  var c = B(a)
                  return c ? D(c) : read(a)
                }),
              (x = function (a) {
                var c
                if (!(c = B(a))) {
                  if ('function' == typeof readbuffer)
                    return new Uint8Array(readbuffer(a))
                  assert('object' == typeof (c = read(a, 'binary')))
                }
                return c
              }),
              'undefined' != typeof print &&
                (((console = 'undefined' == typeof console ? {} : console).log =
                  print),
                (console.warn = console.error =
                  'undefined' != typeof printErr ? printErr : print)))
            : (n || q) &&
              (q
                ? (u = self.location.href)
                : document.currentScript && (u = document.currentScript.src),
              (u =
                0 !== (u = _scriptDir ? _scriptDir : u).indexOf('blob:')
                  ? u.substr(0, u.lastIndexOf('/') + 1)
                  : ''),
              (v = function (a) {
                try {
                  var c = new XMLHttpRequest()
                  return c.open('GET', a, !1), c.send(null), c.responseText
                } catch (d) {
                  if ((a = B(a))) return D(a)
                  throw d
                }
              }),
              q &&
                (x = function (a) {
                  try {
                    var c = new XMLHttpRequest()
                    return (
                      c.open('GET', a, !1),
                      (c.responseType = 'arraybuffer'),
                      c.send(null),
                      new Uint8Array(c.response)
                    )
                  } catch (d) {
                    if ((a = B(a))) return a
                    throw d
                  }
                }),
              (w = function (a) {
                var c = E,
                  d = F,
                  f = new XMLHttpRequest()
                f.open('GET', c, !0),
                  (f.responseType = 'arraybuffer'),
                  (f.onload = function () {
                    var g
                    200 == f.status || (0 == f.status && f.response)
                      ? d(f.response)
                      : (g = B(c))
                      ? d(g.buffer)
                      : a()
                  }),
                  (f.onerror = a),
                  f.send(null)
              })),
          b.print || console.log.bind(console)),
        H = b.printErr || console.warn.bind(console)
      for (m in e) e.hasOwnProperty(m) && (b[m] = e[m])
      var e = null,
        I = Array(1),
        J = 0,
        K = !1
      function assert(a, c) {
        a || C('Assertion failed: ' + c)
      }
      var buffer,
        N,
        M,
        O,
        L = 'undefined' != typeof TextDecoder ? new TextDecoder('utf8') : void 0
      function ca(a, c, d) {
        var f = c + d
        for (d = c; a[d] && !(f <= d); ) ++d
        if (16 < d - c && a.subarray && L) return L.decode(a.subarray(c, d))
        for (f = ''; c < d; ) {
          var h,
            p,
            g = a[c++]
          128 & g
            ? ((h = 63 & a[c++]),
              192 == (224 & g)
                ? (f += String.fromCharCode(((31 & g) << 6) | h))
                : ((p = 63 & a[c++]),
                  (g =
                    224 == (240 & g)
                      ? ((15 & g) << 12) | (h << 6) | p
                      : ((7 & g) << 18) |
                        (h << 12) |
                        (p << 6) |
                        (63 & a[c++])) < 65536
                    ? (f += String.fromCharCode(g))
                    : ((g -= 65536),
                      (f += String.fromCharCode(
                        55296 | (g >> 10),
                        56320 | (1023 & g)
                      )))))
            : (f += String.fromCharCode(g))
        }
        return f
      }
      function da(a, c) {
        return a ? ca(M, a, c) : ''
      }
      function ea(a) {
        return 0 < a % 16777216 && (a += 16777216 - (a % 16777216)), a
      }
      function fa(a) {
        ;(buffer = a),
          (b.HEAP8 = N = new Int8Array(a)),
          (b.HEAP16 = new Int16Array(a)),
          (b.HEAP32 = O = new Int32Array(a)),
          (b.HEAPU8 = M = new Uint8Array(a)),
          (b.HEAPU16 = new Uint16Array(a)),
          (b.HEAPU32 = new Uint32Array(a)),
          (b.HEAPF32 = new Float32Array(a)),
          (b.HEAPF64 = new Float64Array(a))
      }
      'undefined' != typeof TextDecoder && new TextDecoder('utf-16le')
      n = b.TOTAL_MEMORY || 16777216
      function P(a) {
        for (; 0 < a.length; ) {
          var d,
            c = a.shift()
          'function' == typeof c
            ? c()
            : 'number' == typeof (d = c.C)
            ? void 0 === c.w
              ? b.dynCall_v(d)
              : b.dynCall_vi(d, c.w)
            : d(void 0 === c.w ? null : c.w)
        }
      }
      ;(n = (buffer = b.buffer || new ArrayBuffer(n)).byteLength),
        fa(buffer),
        (O[1156] = 5247712)
      var ia = [],
        ja = [],
        ka = [],
        la = []
      ;(Math.imul && -5 === Math.imul(4294967295, 5)) ||
        (Math.imul = function (a, c) {
          var d = 65535 & a,
            f = 65535 & c
          return (d * f + (((a >>> 16) * f + d * (c >>> 16)) << 16)) | 0
        }),
        Math.clz32 ||
          (Math.clz32 = function (a) {
            var c = 32,
              d = a >> 16
            return (
              d && ((c -= 16), (a = d)),
              (d = a >> 8) && ((c -= 8), (a = d)),
              (d = a >> 4) && ((c -= 4), (a = d)),
              (d = a >> 2) && ((c -= 2), (a = d)),
              a >> 1 ? c - 2 : c - a
            )
          }),
        Math.trunc ||
          (Math.trunc = function (a) {
            return a < 0 ? Math.ceil(a) : Math.floor(a)
          })
      var Q = 0,
        S = null,
        T = null
      function C(a) {
        throw (
          (b.onAbort && b.onAbort(a),
          G(a),
          H(a),
          (K = !0),
          'abort(' + a + '). Build with -s ASSERTIONS=1 for more info.')
        )
      }
      ;(b.preloadedImages = {}), (b.preloadedAudios = {})
      var E = null,
        U = 'data:application/octet-stream;base64,'
      function na(a) {
        return a.replace(/\b__Z[\w\d_]+/g, function (a) {
          return a == a ? a : a + ' [' + a + ']'
        })
      }
      function oa() {
        var a = Error()
        if (!a.stack) {
          try {
            throw Error(0)
          } catch (c) {
            a = c
          }
          if (!a.stack) return '(no stack trace available)'
        }
        return a.stack.toString()
      }
      var V = [null, [], []]
      function W(a, c) {
        var d = V[a]
        0 === c || 10 === c
          ? ((1 === a ? G : H)(ca(d, 0)), (d.length = 0))
          : d.push(c)
      }
      function pa(a, c, d, f) {
        try {
          for (var g = 0, h = 0; h < d; h++) {
            for (
              var p = O[(c + 8 * h) >> 2], k = O[(c + (8 * h + 4)) >> 2], y = 0;
              y < k;
              y++
            )
              W(a, M[p + y])
            g += k
          }
          return (O[f >> 2] = g), 0
        } catch (R) {
          return ('undefined' != typeof FS && R instanceof FS.A) || C(R), R.B
        }
      }
      function qa() {
        return N.length
      }
      function ra(a) {
        try {
          var c = new ArrayBuffer(a)
          if (c.byteLength == a) return new Int8Array(c).set(N), sa(c), fa(c), 1
        } catch (d) {}
      }
      var ta = !(E =
        'data:application/octet-stream;base64,AAAAAAAAAAARAAoAERERAAAAAAUAAAAAAAAJAAAAAAsAAAAAAAAAABEADwoREREDCgcAARMJCwsAAAkGCwAACwAGEQAAABEREQAAAAAAAAAAAAAAAAAAAAALAAAAAAAAAAARAAoKERERAAoAAAIACQsAAAAJAAsAAAsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAADAAAAAAMAAAAAAkMAAAAAAAMAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAA0AAAAEDQAAAAAJDgAAAAAADgAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAPAAAAAA8AAAAACRAAAAAAABAAABAAABIAAAASEhIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEgAAABISEgAAAAAAAAkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsAAAAAAAAAAAAAAAoAAAAACgAAAAAJCwAAAAAACwAACwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAAAAwAAAAACQwAAAAAAAwAAAwAADAxMjM0NTY3ODlBQkNERUYFAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAgAAALgLAAAABAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAK/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBbiBlcnJvciBvY2N1cnJlZCBpbiB0aGUgaW50ZXJwb2xhdGlvbiBmb3IgYmxlbmQgc2hhcGVzLiBDb21iaW5hdGlvbkNvdW50IGlzICVkLgBbQ1NNXSBbRV1XYXJwRGVmb3JtZXI6OlRyYW5zZm9ybVRhcmdldCgpIGVycm9yLiBbJWRdIHAwMT0oJS40ZiAsICUuNGYpCgBbQ1NNXSBbRV1Jbml0aWFsaXplRGVmb3JtZXJzKCk6IFVua25vd24gRGVmb3JtZXIgVHlwZS4KAFtDU01dIFtFXWNzbUhhc01vY0NvbnNpc3RlbmN5OiBUaGlzIG1vYzMgc2l6ZSBpcyBpbnZhbGlkLgoATU9DMwBbQ1NNXSBbRV1jc21IYXNNb2NDb25zaXN0ZW5jeTogRmlsZVR5cGUgaXMgaW52YWxpZC4KAFtDU01dIFtFXWNzbUhhc01vY0NvbnNpc3RlbmN5OiBUaGlzIG1vYzMgdmVyIGlzIGludmFsaWQgW3ZlcjolZF0uCgBbQ1NNXSBbRV1jc21IYXNNb2NDb25zaXN0ZW5jeTogVGhlIENvcmUgdW5zdXBwb3J0IGxhdGVyIHRoYW4gbW9jMyB2ZXI6WyVkXS4gVGhpcyBtb2MzIHZlciBpcyBbJWRdLgoAW0NTTV0gW0VdY3NtSGFzTW9jQ29uc2lzdGVuY3k6IEhlYWRlciBzZWN0aW9uIGlzIGludmFsaWQuCgBbQ1NNXSBbRV1jc21IYXNNb2NDb25zaXN0ZW5jeTogRGF0YSBzZWN0aW9uIGlzIGludmFsaWQuCgBMaXZlMkQgQ3ViaXNtIFNESyBDb3JlIFZlcnNpb24gJWQuJWQuJWQAW0NTTV0gW0VdY3NtUmV2aXZlTW9jSW5QbGFjZSBpcyBmYWlsZWQuIENvcnJ1cHRlZCAgbW9jMyBmaWxlLgoAW0NTTV0gW0VdY3NtUmV2aXZlTW9jSW5QbGFjZSBpcyBmYWlsZWQuIFRoZSBDb3JlIHVuc3VwcG9ydCBsYXRlciB0aGFuIG1vYzMgdmVyOlslZF0uIFRoaXMgbW9jMyB2ZXIgaXMgWyVkXS4KAFtDU01dIFtFXWNzbUdldE1vY1ZlcnNpb24gaXMgZmFpbGVkLiBDb3JydXB0ZWQgbW9jMyBmaWxlLgoAW0NTTV0gW0VdJXM6ICVzCgBjc21HZXRNb2NWZXJzaW9uACJhZGRyZXNzIiBpcyBudWxsLgBjc21IYXNNb2NDb25zaXN0ZW5jeQAiYWRkcmVzcyIgYWxpZ25tZW50IGlzIGludmFsaWQuACJzaXplIiBpcyBpbnZhbGlkLgBjc21SZXZpdmVNb2NJblBsYWNlAGNzbVJlYWRDYW52YXNJbmZvACJtb2RlbCIgaXMgaW52YWxpZC4AIm91dFNpemVJblBpeGVscyIgaXMgbnVsbC4AIm91dE9yaWdpbkluUGl4ZWxzIiBpcyBudWxsLgAib3V0UGl4ZWxzUGVyVW5pdCIgaXMgbnVsbC4AY3NtR2V0U2l6ZW9mTW9kZWwAIm1vYyIgaXMgaW52YWxpZC4AY3NtSW5pdGlhbGl6ZU1vZGVsSW5QbGFjZQAic2l6ZSIgaXMgaW52YWxpZABjc21VcGRhdGVNb2RlbABjc21HZXRQYXJhbWV0ZXJDb3VudABjc21HZXRQYXJhbWV0ZXJJZHMAY3NtR2V0UGFyYW1ldGVyVHlwZXMAY3NtR2V0UGFyYW1ldGVyTWluaW11bVZhbHVlcwBjc21HZXRQYXJhbWV0ZXJNYXhpbXVtVmFsdWVzAGNzbUdldFBhcmFtZXRlckRlZmF1bHRWYWx1ZXMAY3NtR2V0UGFyYW1ldGVyVmFsdWVzAGNzbUdldFBhcnRDb3VudABjc21HZXRQYXJ0SWRzAGNzbUdldFBhcnRPcGFjaXRpZXMAY3NtR2V0UGFydFBhcmVudFBhcnRJbmRpY2VzAGNzbUdldERyYXdhYmxlQ291bnQAY3NtR2V0RHJhd2FibGVJZHMAY3NtR2V0RHJhd2FibGVDb25zdGFudEZsYWdzAGNzbUdldERyYXdhYmxlRHluYW1pY0ZsYWdzAGNzbUdldERyYXdhYmxlVGV4dHVyZUluZGljZXMAY3NtR2V0RHJhd2FibGVEcmF3T3JkZXJzAGNzbUdldERyYXdhYmxlUmVuZGVyT3JkZXJzAGNzbUdldERyYXdhYmxlT3BhY2l0aWVzAGNzbUdldERyYXdhYmxlTWFza0NvdW50cwBjc21HZXREcmF3YWJsZU1hc2tzAGNzbUdldERyYXdhYmxlVmVydGV4Q291bnRzAGNzbUdldERyYXdhYmxlVmVydGV4UG9zaXRpb25zAGNzbUdldERyYXdhYmxlVmVydGV4VXZzAGNzbUdldERyYXdhYmxlSW5kZXhDb3VudHMAY3NtR2V0RHJhd2FibGVJbmRpY2VzAGNzbUdldERyYXdhYmxlTXVsdGlwbHlDb2xvcnMAY3NtR2V0RHJhd2FibGVTY3JlZW5Db2xvcnMAY3NtR2V0RHJhd2FibGVQYXJlbnRQYXJ0SW5kaWNlcwBjc21SZXNldERyYXdhYmxlRHluYW1pY0ZsYWdzAGNzbUdldFBhcmFtZXRlcktleUNvdW50cwBjc21HZXRQYXJhbWV0ZXJLZXlWYWx1ZXMAW0NTTV0gW1ddUm90YXRpb25EZWZvcm1lcjogTm90IGZvdW5kIHRyYW5zZm9ybWVkIERpcmVjdGlvbi4KAFtDU01dIFtFXVVwZGF0ZURlZm9ybWVySGllcmFyY2h5KCk6IFVua25vd24gRGVmb3JtZXIgVHlwZS4KACVzCgAtKyAgIDBYMHgAKG51bGwpAC0wWCswWCAwWC0weCsweCAweABpbmYASU5GAG5hbgBOQU4ALg==')
      function D(a) {
        for (var c = [], d = 0; d < a.length; d++) {
          var f = a[d]
          255 < f &&
            (ta &&
              assert(
                !1,
                'Character code ' +
                  f +
                  ' (' +
                  String.fromCharCode(f) +
                  ')  at offset ' +
                  d +
                  ' not in 0x00-0xFF.'
              ),
            (f &= 255)),
            c.push(String.fromCharCode(f))
        }
        return c.join('')
      }
      var ua =
        'function' == typeof atob
          ? atob
          : function (a) {
              var c = '',
                d = 0
              a = a.replace(/[^A-Za-z0-9\+\/=]/g, '')
              do {
                var f =
                    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.indexOf(
                      a.charAt(d++)
                    ),
                  g =
                    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.indexOf(
                      a.charAt(d++)
                    ),
                  h =
                    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.indexOf(
                      a.charAt(d++)
                    ),
                  p =
                    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.indexOf(
                      a.charAt(d++)
                    ),
                  f = (f << 2) | (g >> 4),
                  g = ((15 & g) << 4) | (h >> 2),
                  k = ((3 & h) << 6) | p
              } while (
                ((c += String.fromCharCode(f)),
                64 !== h && (c += String.fromCharCode(g)),
                64 !== p && (c += String.fromCharCode(k)),
                d < a.length)
              )
              return c
            }
      function B(a) {
        if (
          String.prototype.startsWith ? a.startsWith(U) : 0 === a.indexOf(U)
        ) {
          if (((a = a.slice(U.length)), 'boolean' == typeof r && r)) {
            try {
              var c = Buffer.from(a, 'base64')
            } catch (h) {
              c = new Buffer(a, 'base64')
            }
            var d = new Uint8Array(c.buffer, c.byteOffset, c.byteLength)
          } else
            try {
              for (
                var f = ua(a), g = new Uint8Array(f.length), c = 0;
                c < f.length;
                ++c
              )
                g[c] = f.charCodeAt(c)
              d = g
            } catch (h) {
              throw Error('Converting base64 string to bytes failed.')
            }
          return d
        }
      }
      var F,
        Ca,
        Y,
        q = (function (global, env, buffer) {
          var a = new global.Int8Array(buffer),
            b = new global.Int16Array(buffer),
            c = new global.Int32Array(buffer),
            d = new global.Uint8Array(buffer),
            e = new global.Uint16Array(buffer),
            f = new global.Float32Array(buffer),
            g = new global.Float64Array(buffer),
            h = 0 | env.v,
            q = global.Math.floor,
            r = global.Math.pow,
            s = global.Math.cos,
            t = global.Math.sin,
            u = global.Math.atan2,
            v = global.Math.imul,
            w = global.Math.clz32,
            x = env.a,
            y = env.b,
            z = env.c,
            A = env.d,
            B = env.e,
            C = env.f,
            D = env.g,
            E = env.h,
            F = env.i,
            G = env.j,
            H = env.k,
            I = env.l,
            J = env.m,
            S = 4832
          function qa(b, d) {
            b |= 0
            var G,
              H,
              I,
              J,
              K,
              L,
              M,
              N,
              O,
              P,
              Q,
              R,
              T,
              U,
              V,
              W,
              X,
              Y,
              Z,
              _,
              ca,
              da,
              ea,
              fa,
              ga,
              ha,
              ja,
              ka,
              la,
              ma,
              na,
              oa,
              qa,
              sa,
              ta,
              va,
              wa,
              xa,
              ya,
              za,
              Aa,
              Ba,
              Da,
              Fa,
              Ha,
              La,
              f = 0,
              g = 0,
              h = 0,
              i = 0,
              j = 0,
              k = 0,
              l = 0,
              m = 0,
              n = 0,
              o = 0,
              p = 0,
              q = 0,
              r = 0,
              s = 0,
              t = 0,
              u = 0,
              w = 0,
              x = 0,
              y = 0,
              z = 0,
              A = 0,
              B = 0,
              C = 0,
              D = 0,
              E = 0,
              F = 0,
              $ = 0,
              aa = 0,
              ba = 0,
              ua = 0,
              Ca = 0,
              Ea = 0,
              Ga = 0,
              Ia = 0,
              Ja = 0,
              Ka = 0,
              Ma = 0,
              Na = S,
              f = (S = (S + 63) & -64)
            if (
              ((S = (S + 624) | 0),
              (La = (f + 616) | 0),
              (_ = (f + 608) | 0),
              (i = (f + 600) | 0),
              (h = (f + 592) | 0),
              (Ka = f),
              (d |= 0) >>> 0 < 1280)
            )
              return ia(0, 993, (f + 576) | 0), (S = Na), (Ma = 0) | Ma
            if (0 | yc(b))
              return ia(0, 1057, (f + 584) | 0), (S = Na), (Ma = 0) | Ma
            if (
              ((g = 255 & (f = 0 | a[(C = (b + 4) | 0) >> 0])),
              !((f << 24) >> 24))
            )
              return (c[h >> 2] = g), ia(0, 1110, h), (S = Na), (Ma = 0) | Ma
            if (4 < (255 & f))
              return (
                (c[i >> 2] = 4),
                (c[(i + 4) >> 2] = g),
                ia(0, 1177, i),
                (S = Na),
                (Ma = 0) | Ma
              )
            ;(y = 0 != (0 | a[(x = (b + 5) | 0) >> 0])) &&
              (sb(C, 1), tb((b + 64) | 0, 4, 160)),
              $c(0 | Ka, 0, 576),
              pa(b, Ka),
              (F = 0 | a[C >> 0]),
              (w = (b + d) | 0),
              (f = ((z = 0 | c[Ka >> 2]) + 128) | 0)
            a: do {
              if (
                (z >>> 0 < b >>> 0) | (w >>> 0 < z >>> 0) ||
                (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0) ||
                ((m = 0 | c[(Ka + 4) >> 2]),
                (o = (m + 64) | 0),
                (m >>> 0 < b >>> 0) | (w >>> 0 < m >>> 0)) ||
                (m >>> 0 < f >>> 0) |
                  (o >>> 0 < b >>> 0) |
                  (w >>> 0 < o >>> 0) ||
                (($ = 0 | c[z >> 2]), !(-1 < (0 | $))) ||
                ((n = 0 | c[(Ka + 8) >> 2]),
                (u = $ << 2),
                (p = (n + u) | 0),
                (n >>> 0 < b >>> 0) | (w >>> 0 < n >>> 0)) ||
                (n >>> 0 < o >>> 0) |
                  (p >>> 0 < b >>> 0) |
                  (w >>> 0 < p >>> 0) ||
                ((ba = (Ka + 12) | 0),
                (aa = 0 | c[ba >> 2]),
                (q = (aa + ($ << 6)) | 0),
                (aa >>> 0 < b >>> 0) | (w >>> 0 < aa >>> 0)) ||
                (aa >>> 0 < p >>> 0) |
                  (q >>> 0 < b >>> 0) |
                  (w >>> 0 < q >>> 0) ||
                ((ua = (Ka + 16) | 0),
                (j = 0 | c[ua >> 2]),
                (r = (j + u) | 0),
                (j >>> 0 < b >>> 0) | (w >>> 0 < j >>> 0)) ||
                (j >>> 0 < q >>> 0) |
                  (r >>> 0 < b >>> 0) |
                  (w >>> 0 < r >>> 0) ||
                ((Ca = (Ka + 20) | 0),
                (k = 0 | c[Ca >> 2]),
                (s = (k + u) | 0),
                (k >>> 0 < b >>> 0) | (w >>> 0 < k >>> 0)) ||
                (k >>> 0 < r >>> 0) |
                  (s >>> 0 < b >>> 0) |
                  (w >>> 0 < s >>> 0) ||
                ((Ea = (Ka + 24) | 0),
                (l = 0 | c[Ea >> 2]),
                (t = (l + u) | 0),
                (l >>> 0 < b >>> 0) | (w >>> 0 < l >>> 0))
              )
                Ma = 319
              else {
                if (
                  (l >>> 0 < s >>> 0) |
                  (t >>> 0 < b >>> 0) |
                  (w >>> 0 < t >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((g = ((f = 0 | c[(Y = (Ka + 28) | 0) >> 2]) + u) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < t >>> 0) |
                  (g >>> 0 < b >>> 0) |
                  (w >>> 0 < g >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((h = ((f = 0 | c[(o = (Ka + 32) | 0) >> 2]) + u) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < g >>> 0) |
                  (h >>> 0 < b >>> 0) |
                  (w >>> 0 < h >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((i = ((f = 0 | c[(Z = (Ka + 36) | 0) >> 2]) + u) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < h >>> 0) |
                  (i >>> 0 < b >>> 0) |
                  (w >>> 0 < i >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if ((0 | (g = 0 | c[(z + 4) >> 2])) <= -1) {
                  Ma = 319
                  break
                }
                if (
                  ((h = ((f = 0 | c[(Ka + 40) >> 2]) + (d = g << 2)) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < i >>> 0) |
                  (h >>> 0 < b >>> 0) |
                  (w >>> 0 < h >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((g = ((f = 0 | c[(t = (Ka + 44) | 0) >> 2]) + (g << 6)) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < h >>> 0) |
                  (g >>> 0 < b >>> 0) |
                  (w >>> 0 < g >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((h = ((f = 0 | c[(n = (Ka + 48) | 0) >> 2]) + d) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < g >>> 0) |
                  (h >>> 0 < b >>> 0) |
                  (w >>> 0 < h >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((g = ((f = 0 | c[(A = (Ka + 52) | 0) >> 2]) + d) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < h >>> 0) |
                  (g >>> 0 < b >>> 0) |
                  (w >>> 0 < g >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((h = ((f = 0 | c[(u = (Ka + 56) | 0) >> 2]) + d) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < g >>> 0) |
                  (h >>> 0 < b >>> 0) |
                  (w >>> 0 < h >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((g = ((f = 0 | c[(D = (Ka + 60) | 0) >> 2]) + d) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < h >>> 0) |
                  (g >>> 0 < b >>> 0) |
                  (w >>> 0 < g >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((h = ((f = 0 | c[(B = (Ka + 64) | 0) >> 2]) + d) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < g >>> 0) |
                  (h >>> 0 < b >>> 0) |
                  (w >>> 0 < h >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((g = ((f = 0 | c[(p = (Ka + 68) | 0) >> 2]) + d) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < h >>> 0) |
                  (g >>> 0 < b >>> 0) |
                  (w >>> 0 < g >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((h = ((f = 0 | c[(E = (Ka + 72) | 0) >> 2]) + d) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < g >>> 0) |
                  (h >>> 0 < b >>> 0) |
                  (w >>> 0 < h >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if ((0 | (f = 0 | c[(z + 8) >> 2])) <= -1) {
                  Ma = 319
                  break
                }
                if (
                  ((i = ((g = 0 | c[(Ka + 76) >> 2]) + (m = f << 2)) | 0),
                  (g >>> 0 < b >>> 0) | (w >>> 0 < g >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (g >>> 0 < h >>> 0) |
                  (i >>> 0 < b >>> 0) |
                  (w >>> 0 < i >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((g = ((f = 0 | c[(ga = (Ka + 80) | 0) >> 2]) + m) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < i >>> 0) |
                  (g >>> 0 < b >>> 0) |
                  (w >>> 0 < g >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((h = ((f = 0 | c[(Ja = (Ka + 84) | 0) >> 2]) + m) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < g >>> 0) |
                  (h >>> 0 < b >>> 0) |
                  (w >>> 0 < h >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((g = ((f = 0 | c[(Ga = (Ka + 92) | 0) >> 2]) + m) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < h >>> 0) |
                  (g >>> 0 < b >>> 0) |
                  (w >>> 0 < g >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((h = ((f = 0 | c[(sa = (Ka + 96) | 0) >> 2]) + m) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < g >>> 0) |
                  (h >>> 0 < b >>> 0) |
                  (w >>> 0 < h >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((i = ((f = 0 | c[(ea = (Ka + 100) | 0) >> 2]) + m) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < h >>> 0) |
                  (i >>> 0 < b >>> 0) |
                  (w >>> 0 < i >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if ((0 | (f = 0 | c[(z + 12) >> 2])) <= -1) {
                  Ma = 319
                  break
                }
                if (
                  ((h = ((g = 0 | c[(Ka + 108) >> 2]) + (l = f << 2)) | 0),
                  (g >>> 0 < b >>> 0) | (w >>> 0 < g >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (g >>> 0 < i >>> 0) |
                  (h >>> 0 < b >>> 0) |
                  (w >>> 0 < h >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((g = ((f = 0 | c[(ya = (Ka + 112) | 0) >> 2]) + l) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < h >>> 0) |
                  (g >>> 0 < b >>> 0) |
                  (w >>> 0 < g >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((h = ((f = 0 | c[(Ia = (Ka + 116) | 0) >> 2]) + l) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < g >>> 0) |
                  (h >>> 0 < b >>> 0) |
                  (w >>> 0 < h >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((g = ((f = 0 | c[(Ka + 124) >> 2]) + l) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < h >>> 0) |
                  (g >>> 0 < b >>> 0) |
                  (w >>> 0 < g >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if ((0 | (i = 0 | c[(z + 16) >> 2])) <= -1) {
                  Ma = 319
                  break
                }
                if (
                  ((h = ((f = 0 | c[(Ka + 128) >> 2]) + (k = i << 2)) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < g >>> 0) |
                  (h >>> 0 < b >>> 0) |
                  (w >>> 0 < h >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((g = ((f = 0 | c[(Ka + 132) >> 2]) + k) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < h >>> 0) |
                  (g >>> 0 < b >>> 0) |
                  (w >>> 0 < g >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((h = ((f = 0 | c[(Ka + 136) >> 2]) + k) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < g >>> 0) |
                  (h >>> 0 < b >>> 0) |
                  (w >>> 0 < h >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((g = ((f = 0 | c[(Ka + 140) >> 2]) + k) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < h >>> 0) |
                  (g >>> 0 < b >>> 0) |
                  (w >>> 0 < g >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((h =
                    ((f = 0 | c[(ca = (Ka + 144) | 0) >> 2]) + (i << 6)) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < g >>> 0) |
                  (h >>> 0 < b >>> 0) |
                  (w >>> 0 < h >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((g = ((f = 0 | c[(fa = (Ka + 148) | 0) >> 2]) + k) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < h >>> 0) |
                  (g >>> 0 < b >>> 0) |
                  (w >>> 0 < g >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((h = ((f = 0 | c[(ha = (Ka + 152) | 0) >> 2]) + k) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < g >>> 0) |
                  (h >>> 0 < b >>> 0) |
                  (w >>> 0 < h >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((g = ((f = 0 | c[(Ha = (Ka + 156) | 0) >> 2]) + k) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < h >>> 0) |
                  (g >>> 0 < b >>> 0) |
                  (w >>> 0 < g >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((h = ((f = 0 | c[(xa = (Ka + 164) | 0) >> 2]) + k) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < g >>> 0) |
                  (h >>> 0 < b >>> 0) |
                  (w >>> 0 < h >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((g = ((f = 0 | c[(wa = (Ka + 168) | 0) >> 2]) + k) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < h >>> 0) |
                  (g >>> 0 < b >>> 0) |
                  (w >>> 0 < g >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((h = ((f = 0 | c[(Aa = (Ka + 172) | 0) >> 2]) + k) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < g >>> 0) |
                  (h >>> 0 < b >>> 0) |
                  (w >>> 0 < h >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((g = ((f = 0 | c[(za = (Ka + 176) | 0) >> 2]) + k) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < h >>> 0) |
                  (g >>> 0 < b >>> 0) |
                  (w >>> 0 < g >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((h = ((f = 0 | c[(Ba = (Ka + 180) | 0) >> 2]) + k) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < g >>> 0) |
                  (h >>> 0 < b >>> 0) |
                  (w >>> 0 < h >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((g = ((f = 0 | c[(Ka + 184) >> 2]) + i) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < h >>> 0) |
                  (g >>> 0 < b >>> 0) |
                  (w >>> 0 < g >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((h = ((f = 0 | c[(Fa = (Ka + 188) | 0) >> 2]) + k) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < g >>> 0) |
                  (h >>> 0 < b >>> 0) |
                  (w >>> 0 < h >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((g = ((f = 0 | c[(la = (Ka + 192) | 0) >> 2]) + k) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < h >>> 0) |
                  (g >>> 0 < b >>> 0) |
                  (w >>> 0 < g >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((h = ((f = 0 | c[(qa = (Ka + 196) | 0) >> 2]) + k) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < g >>> 0) |
                  (h >>> 0 < b >>> 0) |
                  (w >>> 0 < h >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((g = ((f = 0 | c[(ka = (Ka + 200) | 0) >> 2]) + k) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < h >>> 0) |
                  (g >>> 0 < b >>> 0) |
                  (w >>> 0 < g >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((h = ((f = 0 | c[(va = (Ka + 204) | 0) >> 2]) + k) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < g >>> 0) |
                  (h >>> 0 < b >>> 0) |
                  (w >>> 0 < h >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((i = ((f = 0 | c[(ta = (Ka + 208) | 0) >> 2]) + k) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < h >>> 0) |
                  (i >>> 0 < b >>> 0) |
                  (w >>> 0 < i >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if ((0 | (g = 0 | c[(z + 20) >> 2])) <= -1) {
                  Ma = 319
                  break
                }
                if (
                  ((h = ((f = 0 | c[(Ka + 212) >> 2]) + (j = g << 2)) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < i >>> 0) |
                  (h >>> 0 < b >>> 0) |
                  (w >>> 0 < h >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((g =
                    ((f = 0 | c[(Da = (Ka + 216) | 0) >> 2]) + (g << 6)) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < h >>> 0) |
                  (g >>> 0 < b >>> 0) |
                  (w >>> 0 < g >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((h = ((f = 0 | c[(Ka + 220) >> 2]) + j) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < g >>> 0) |
                  (h >>> 0 < b >>> 0) |
                  (w >>> 0 < h >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((g = ((f = 0 | c[(Ka + 224) >> 2]) + j) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < h >>> 0) |
                  (g >>> 0 < b >>> 0) |
                  (w >>> 0 < g >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((h = ((f = 0 | c[(Ka + 228) >> 2]) + j) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < g >>> 0) |
                  (h >>> 0 < b >>> 0) |
                  (w >>> 0 < h >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((g = ((f = 0 | c[(na = (Ka + 232) | 0) >> 2]) + j) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < h >>> 0) |
                  (g >>> 0 < b >>> 0) |
                  (w >>> 0 < g >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((h = ((f = 0 | c[(ma = (Ka + 236) | 0) >> 2]) + j) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < g >>> 0) |
                  (h >>> 0 < b >>> 0) |
                  (w >>> 0 < h >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((g = ((f = 0 | c[(oa = (Ka + 244) | 0) >> 2]) + j) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < h >>> 0) |
                  (g >>> 0 < b >>> 0) |
                  (w >>> 0 < g >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((h = ((f = 0 | c[(ja = (Ka + 248) | 0) >> 2]) + j) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < g >>> 0) |
                  (h >>> 0 < b >>> 0) |
                  (w >>> 0 < h >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if ((0 | (f = 0 | c[(z + 24) >> 2])) <= -1) {
                  Ma = 319
                  break
                }
                if (
                  ((i = ((g = 0 | c[(Ka + 272) >> 2]) + (f << 2)) | 0),
                  (g >>> 0 < b >>> 0) | (w >>> 0 < g >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (g >>> 0 < h >>> 0) |
                  (i >>> 0 < b >>> 0) |
                  (w >>> 0 < i >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if ((0 | (f = 0 | c[(z + 28) >> 2])) <= -1) {
                  Ma = 319
                  break
                }
                if (
                  ((d = ((g = 0 | c[(Ka + 276) >> 2]) + (h = f << 2)) | 0),
                  (g >>> 0 < b >>> 0) | (w >>> 0 < g >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (g >>> 0 < i >>> 0) |
                  (d >>> 0 < b >>> 0) |
                  (w >>> 0 < d >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((i = ((f = 0 | c[(da = (Ka + 280) | 0) >> 2]) + h) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < d >>> 0) |
                  (i >>> 0 < b >>> 0) |
                  (w >>> 0 < i >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if ((0 | (f = 0 | c[(z + 32) >> 2])) <= -1) {
                  Ma = 319
                  break
                }
                if (
                  ((h = ((g = 0 | c[(Ka + 284) >> 2]) + (d = f << 2)) | 0),
                  (g >>> 0 < b >>> 0) | (w >>> 0 < g >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (g >>> 0 < i >>> 0) |
                  (h >>> 0 < b >>> 0) |
                  (w >>> 0 < h >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((g = ((f = 0 | c[(Ka + 288) >> 2]) + d) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < h >>> 0) |
                  (g >>> 0 < b >>> 0) |
                  (w >>> 0 < g >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((h = ((f = 0 | c[(Ka + 292) >> 2]) + d) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < g >>> 0) |
                  (h >>> 0 < b >>> 0) |
                  (w >>> 0 < h >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((g = ((f = 0 | c[(Ka + 296) >> 2]) + d) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < h >>> 0) |
                  (g >>> 0 < b >>> 0) |
                  (w >>> 0 < g >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((h = ((f = 0 | c[(Ka + 300) >> 2]) + d) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < g >>> 0) |
                  (h >>> 0 < b >>> 0) |
                  (w >>> 0 < h >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((g = ((f = 0 | c[(r = (Ka + 304) | 0) >> 2]) + d) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < h >>> 0) |
                  (g >>> 0 < b >>> 0) |
                  (w >>> 0 < g >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((i = ((f = 0 | c[(X = (Ka + 308) | 0) >> 2]) + d) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < g >>> 0) |
                  (i >>> 0 < b >>> 0) |
                  (w >>> 0 < i >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if ((0 | (f = 0 | c[(z + 36) >> 2])) <= -1) {
                  Ma = 319
                  break
                }
                if (
                  ((h = ((g = 0 | c[(Ka + 312) >> 2]) + (d = f << 2)) | 0),
                  (g >>> 0 < b >>> 0) | (w >>> 0 < g >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (g >>> 0 < i >>> 0) |
                  (h >>> 0 < b >>> 0) |
                  (w >>> 0 < h >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((g = ((f = 0 | c[(Ka + 316) >> 2]) + d) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < h >>> 0) |
                  (g >>> 0 < b >>> 0) |
                  (w >>> 0 < g >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((h = ((f = 0 | c[(W = (Ka + 320) | 0) >> 2]) + d) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < g >>> 0) |
                  (h >>> 0 < b >>> 0) |
                  (w >>> 0 < h >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if ((0 | (f = 0 | c[(z + 40) >> 2])) <= -1) {
                  Ma = 319
                  break
                }
                if (
                  ((i = ((g = 0 | c[(Ka + 324) >> 2]) + (f << 2)) | 0),
                  (g >>> 0 < b >>> 0) | (w >>> 0 < g >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (g >>> 0 < h >>> 0) |
                  (i >>> 0 < b >>> 0) |
                  (w >>> 0 < i >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if ((0 | (f = 0 | c[(z + 44) >> 2])) <= -1) {
                  Ma = 319
                  break
                }
                if (
                  ((d =
                    ((g = 0 | c[(V = (Ka + 336) | 0) >> 2]) + (f << 2)) | 0),
                  (g >>> 0 < b >>> 0) | (w >>> 0 < g >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (g >>> 0 < i >>> 0) |
                  (d >>> 0 < b >>> 0) |
                  (w >>> 0 < d >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if ((0 | (f = 0 | c[(z + 48) >> 2])) <= -1) {
                  Ma = 319
                  break
                }
                if (
                  ((i = ((g = 0 | c[(Ka + 340) >> 2]) + (h = f << 2)) | 0),
                  (g >>> 0 < b >>> 0) | (w >>> 0 < g >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (g >>> 0 < d >>> 0) |
                  (i >>> 0 < b >>> 0) |
                  (w >>> 0 < i >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((d = ((f = 0 | c[(U = (Ka + 344) | 0) >> 2]) + h) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < i >>> 0) |
                  (d >>> 0 < b >>> 0) |
                  (w >>> 0 < d >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if ((0 | (f = 0 | c[(z + 52) >> 2])) <= -1) {
                  Ma = 319
                  break
                }
                if (
                  ((i = ((g = 0 | c[(Ka + 328) >> 2]) + (h = f << 2)) | 0),
                  (g >>> 0 < b >>> 0) | (w >>> 0 < g >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (g >>> 0 < d >>> 0) |
                  (i >>> 0 < b >>> 0) |
                  (w >>> 0 < i >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((h = ((f = 0 | c[(s = (Ka + 332) | 0) >> 2]) + h) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < i >>> 0) |
                  (h >>> 0 < b >>> 0) |
                  (w >>> 0 < h >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if ((0 | (f = 0 | c[(z + 56) >> 2])) <= -1) {
                  Ma = 319
                  break
                }
                if (
                  ((i = ((g = 0 | c[(Ka + 428) >> 2]) + (f << 2)) | 0),
                  (g >>> 0 < b >>> 0) | (w >>> 0 < g >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (g >>> 0 < h >>> 0) |
                  (i >>> 0 < b >>> 0) |
                  (w >>> 0 < i >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if ((0 | (f = 0 | c[(z + 60) >> 2])) <= -1) {
                  Ma = 319
                  break
                }
                if (
                  ((h = ((g = 0 | c[(Ka + 432) >> 2]) + (f << 2)) | 0),
                  (g >>> 0 < b >>> 0) | (w >>> 0 < g >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (g >>> 0 < i >>> 0) |
                  (h >>> 0 < b >>> 0) |
                  (w >>> 0 < h >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if ((0 | (f = 0 | c[(z + 64) >> 2])) <= -1) {
                  Ma = 319
                  break
                }
                if (
                  ((i = ((g = 0 | c[(Ka + 436) >> 2]) + (f << 1)) | 0),
                  (g >>> 0 < b >>> 0) | (w >>> 0 < g >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (g >>> 0 < h >>> 0) |
                  (i >>> 0 < b >>> 0) |
                  (w >>> 0 < i >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if ((0 | (f = 0 | c[(z + 68) >> 2])) <= -1) {
                  Ma = 319
                  break
                }
                if (
                  ((h =
                    ((g = 0 | c[(T = (Ka + 440) | 0) >> 2]) + (f << 2)) | 0),
                  (g >>> 0 < b >>> 0) | (w >>> 0 < g >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (g >>> 0 < i >>> 0) |
                  (h >>> 0 < b >>> 0) |
                  (w >>> 0 < h >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if ((0 | (f = 0 | c[(z + 72) >> 2])) <= -1) {
                  Ma = 319
                  break
                }
                if (
                  ((i = ((g = 0 | c[(Ka + 444) >> 2]) + (d = f << 2)) | 0),
                  (g >>> 0 < b >>> 0) | (w >>> 0 < g >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (g >>> 0 < h >>> 0) |
                  (i >>> 0 < b >>> 0) |
                  (w >>> 0 < i >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((g = ((f = 0 | c[(R = (Ka + 448) | 0) >> 2]) + d) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < i >>> 0) |
                  (g >>> 0 < b >>> 0) |
                  (w >>> 0 < g >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((h = ((f = 0 | c[(Ka + 452) >> 2]) + d) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < g >>> 0) |
                  (h >>> 0 < b >>> 0) |
                  (w >>> 0 < h >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((g = ((f = 0 | c[(Ka + 456) >> 2]) + d) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < h >>> 0) |
                  (g >>> 0 < b >>> 0) |
                  (w >>> 0 < g >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((h = ((f = 0 | c[(Ka + 460) >> 2]) + d) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < g >>> 0) |
                  (h >>> 0 < b >>> 0) |
                  (w >>> 0 < h >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if ((0 | (f = 0 | c[(z + 76) >> 2])) <= -1) {
                  Ma = 319
                  break
                }
                if (
                  ((i = ((g = 0 | c[(Ka + 464) >> 2]) + (d = f << 2)) | 0),
                  (g >>> 0 < b >>> 0) | (w >>> 0 < g >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (g >>> 0 < h >>> 0) |
                  (i >>> 0 < b >>> 0) |
                  (w >>> 0 < i >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((g = ((f = 0 | c[(K = (Ka + 468) | 0) >> 2]) + d) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < i >>> 0) |
                  (g >>> 0 < b >>> 0) |
                  (w >>> 0 < g >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((h = ((f = 0 | c[(Q = (Ka + 472) | 0) >> 2]) + d) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < g >>> 0) |
                  (h >>> 0 < b >>> 0) |
                  (w >>> 0 < h >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if ((0 | (g = 0 | c[(z + 80) >> 2])) <= -1) {
                  Ma = 319
                  break
                }
                if (
                  ((i = ((f = 0 | c[(Ka + 476) >> 2]) + (d = g << 2)) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < h >>> 0) |
                  (i >>> 0 < b >>> 0) |
                  (w >>> 0 < i >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((g =
                    ((f = 0 | c[(J = (Ka + 480) | 0) >> 2]) + (g << 6)) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < i >>> 0) |
                  (g >>> 0 < b >>> 0) |
                  (w >>> 0 < g >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((h = ((f = 0 | c[(H = (Ka + 484) | 0) >> 2]) + d) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < g >>> 0) |
                  (h >>> 0 < b >>> 0) |
                  (w >>> 0 < h >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((g = ((f = 0 | c[(I = (Ka + 488) | 0) >> 2]) + d) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < h >>> 0) |
                  (g >>> 0 < b >>> 0) |
                  (w >>> 0 < g >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((h = ((f = 0 | c[(G = (Ka + 492) | 0) >> 2]) + d) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < g >>> 0) |
                  (h >>> 0 < b >>> 0) |
                  (w >>> 0 < h >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((g = ((f = 0 | c[(L = (Ka + 496) | 0) >> 2]) + d) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < h >>> 0) |
                  (g >>> 0 < b >>> 0) |
                  (w >>> 0 < g >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((h = ((f = 0 | c[(O = (Ka + 500) | 0) >> 2]) + d) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < g >>> 0) |
                  (h >>> 0 < b >>> 0) |
                  (w >>> 0 < h >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((g = ((f = 0 | c[(P = (Ka + 504) | 0) >> 2]) + d) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < h >>> 0) |
                  (g >>> 0 < b >>> 0) |
                  (w >>> 0 < g >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((h = ((f = 0 | c[(M = (Ka + 508) | 0) >> 2]) + d) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < g >>> 0) |
                  (h >>> 0 < b >>> 0) |
                  (w >>> 0 < h >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if ((0 | (g = 0 | c[(z + 84) >> 2])) <= -1) {
                  Ma = 319
                  break
                }
                if (
                  ((i = ((f = 0 | c[(Ka + 512) >> 2]) + (g << 2)) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < h >>> 0) |
                  (i >>> 0 < b >>> 0) |
                  (w >>> 0 < i >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if (
                  ((d =
                    ((f = 0 | c[(N = (Ka + 516) | 0) >> 2]) + (g << 1)) | 0),
                  (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (f >>> 0 < i >>> 0) |
                  (d >>> 0 < b >>> 0) |
                  (w >>> 0 < d >>> 0)
                ) {
                  Ma = 319
                  break
                }
                if ((0 | (f = 0 | c[(z + 88) >> 2])) <= -1) {
                  Ma = 319
                  break
                }
                if (
                  ((h = ((g = 0 | c[(Ka + 520) >> 2]) + (f << 2)) | 0),
                  (g >>> 0 < b >>> 0) | (w >>> 0 < g >>> 0))
                ) {
                  Ma = 319
                  break
                }
                if (
                  (g >>> 0 < d >>> 0) |
                  (h >>> 0 < b >>> 0) |
                  (w >>> 0 < h >>> 0)
                ) {
                  Ma = 319
                  break
                }
                do {
                  if (1 < (255 & F)) {
                    if (
                      ((g = ((f = 0 | c[(Ka + 104) >> 2]) + m) | 0),
                      (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      (f >>> 0 < h >>> 0) |
                      (g >>> 0 < b >>> 0) |
                      (w >>> 0 < g >>> 0)
                    ) {
                      Ma = 319
                      break a
                    }
                    if ((255 & F) <= 3) break
                    if (
                      ((h = ((f = 0 | c[(Ka + 260) >> 2]) + j) | 0),
                      (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      (f >>> 0 < g >>> 0) |
                      (h >>> 0 < b >>> 0) |
                      (w >>> 0 < h >>> 0)
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      ((g = ((f = 0 | c[(Ka + 264) >> 2]) + j) | 0),
                      (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      (f >>> 0 < h >>> 0) |
                      (g >>> 0 < b >>> 0) |
                      (w >>> 0 < g >>> 0)
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      ((i = ((f = 0 | c[(Ka + 268) >> 2]) + j) | 0),
                      (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      (f >>> 0 < g >>> 0) |
                      (i >>> 0 < b >>> 0) |
                      (w >>> 0 < i >>> 0)
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      ((h = ((f = 0 | c[(Ka + 88) >> 2]) + m) | 0),
                      (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      (f >>> 0 < i >>> 0) |
                      (h >>> 0 < b >>> 0) |
                      (w >>> 0 < h >>> 0)
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      ((g = ((f = 0 | c[(Ka + 120) >> 2]) + l) | 0),
                      (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      (f >>> 0 < h >>> 0) |
                      (g >>> 0 < b >>> 0) |
                      (w >>> 0 < g >>> 0)
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      ((i = ((f = 0 | c[(Ka + 160) >> 2]) + k) | 0),
                      (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      (f >>> 0 < g >>> 0) |
                      (i >>> 0 < b >>> 0) |
                      (w >>> 0 < i >>> 0)
                    ) {
                      Ma = 319
                      break a
                    }
                    if ((0 | (f = 0 | c[(z + 92) >> 2])) <= -1) {
                      Ma = 319
                      break a
                    }
                    if (
                      ((h = ((g = 0 | c[(Ka + 524) >> 2]) + (d = f << 2)) | 0),
                      (g >>> 0 < b >>> 0) | (w >>> 0 < g >>> 0))
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      (g >>> 0 < i >>> 0) |
                      (h >>> 0 < b >>> 0) |
                      (w >>> 0 < h >>> 0)
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      ((g = ((f = 0 | c[(Ka + 528) >> 2]) + d) | 0),
                      (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      (f >>> 0 < h >>> 0) |
                      (g >>> 0 < b >>> 0) |
                      (w >>> 0 < g >>> 0)
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      ((i = ((f = 0 | c[(Ka + 532) >> 2]) + d) | 0),
                      (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      (f >>> 0 < g >>> 0) |
                      (i >>> 0 < b >>> 0) |
                      (w >>> 0 < i >>> 0)
                    ) {
                      Ma = 319
                      break a
                    }
                    if ((0 | (f = 0 | c[(z + 96) >> 2])) <= -1) {
                      Ma = 319
                      break a
                    }
                    if (
                      ((h = ((g = 0 | c[(Ka + 536) >> 2]) + (d = f << 2)) | 0),
                      (g >>> 0 < b >>> 0) | (w >>> 0 < g >>> 0))
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      (g >>> 0 < i >>> 0) |
                      (h >>> 0 < b >>> 0) |
                      (w >>> 0 < h >>> 0)
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      ((i = ((f = 0 | c[(Ka + 540) >> 2]) + d) | 0),
                      (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      (f >>> 0 < h >>> 0) |
                      (i >>> 0 < b >>> 0) |
                      (w >>> 0 < i >>> 0)
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      ((g = ((f = 0 | c[(Ka + 544) >> 2]) + d) | 0),
                      (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      (f >>> 0 < i >>> 0) |
                      (g >>> 0 < b >>> 0) |
                      (w >>> 0 < g >>> 0)
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      ((h = ((f = 0 | c[(Ka + 240) >> 2]) + j) | 0),
                      (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      (f >>> 0 < g >>> 0) |
                      (h >>> 0 < b >>> 0) |
                      (w >>> 0 < h >>> 0)
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      ((g = ((f = 0 | c[(Ka + 252) >> 2]) + j) | 0),
                      (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      (f >>> 0 < h >>> 0) |
                      (g >>> 0 < b >>> 0) |
                      (w >>> 0 < g >>> 0)
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      ((i = ((f = 0 | c[(Ka + 256) >> 2]) + j) | 0),
                      (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      (f >>> 0 < g >>> 0) |
                      (i >>> 0 < b >>> 0) |
                      (w >>> 0 < i >>> 0)
                    ) {
                      Ma = 319
                      break a
                    }
                    if ((0 | (f = 0 | c[(z + 100) >> 2])) <= -1) {
                      Ma = 319
                      break a
                    }
                    if (
                      ((h = ((g = 0 | c[(Ka + 348) >> 2]) + (d = f << 2)) | 0),
                      (g >>> 0 < b >>> 0) | (w >>> 0 < g >>> 0))
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      (g >>> 0 < i >>> 0) |
                      (h >>> 0 < b >>> 0) |
                      (w >>> 0 < h >>> 0)
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      ((g = ((f = 0 | c[(Ka + 352) >> 2]) + d) | 0),
                      (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      (f >>> 0 < h >>> 0) |
                      (g >>> 0 < b >>> 0) |
                      (w >>> 0 < g >>> 0)
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      ((i = ((f = 0 | c[(Ka + 356) >> 2]) + d) | 0),
                      (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      (f >>> 0 < g >>> 0) |
                      (i >>> 0 < b >>> 0) |
                      (w >>> 0 < i >>> 0)
                    ) {
                      Ma = 319
                      break a
                    }
                    if ((0 | (f = 0 | c[(z + 104) >> 2])) <= -1) {
                      Ma = 319
                      break a
                    }
                    if (
                      ((h = ((g = 0 | c[(Ka + 360) >> 2]) + (d = f << 2)) | 0),
                      (g >>> 0 < b >>> 0) | (w >>> 0 < g >>> 0))
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      (g >>> 0 < i >>> 0) |
                      (h >>> 0 < b >>> 0) |
                      (w >>> 0 < h >>> 0)
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      ((g = ((f = 0 | c[(Ka + 364) >> 2]) + d) | 0),
                      (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      (f >>> 0 < h >>> 0) |
                      (g >>> 0 < b >>> 0) |
                      (w >>> 0 < g >>> 0)
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      ((h = ((f = 0 | c[(Ka + 368) >> 2]) + d) | 0),
                      (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      (f >>> 0 < g >>> 0) |
                      (h >>> 0 < b >>> 0) |
                      (w >>> 0 < h >>> 0)
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      ((g = ((f = 0 | c[(Ka + 372) >> 2]) + d) | 0),
                      (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      (f >>> 0 < h >>> 0) |
                      (g >>> 0 < b >>> 0) |
                      (w >>> 0 < g >>> 0)
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      ((i = ((f = 0 | c[(Ka + 376) >> 2]) + d) | 0),
                      (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      (f >>> 0 < g >>> 0) |
                      (i >>> 0 < b >>> 0) |
                      (w >>> 0 < i >>> 0)
                    ) {
                      Ma = 319
                      break a
                    }
                    if ((0 | (f = 0 | c[(z + 108) >> 2])) <= -1) {
                      Ma = 319
                      break a
                    }
                    if (
                      ((h = ((g = 0 | c[(Ka + 380) >> 2]) + (d = f << 2)) | 0),
                      (g >>> 0 < b >>> 0) | (w >>> 0 < g >>> 0))
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      (g >>> 0 < i >>> 0) |
                      (h >>> 0 < b >>> 0) |
                      (w >>> 0 < h >>> 0)
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      ((g = ((f = 0 | c[(Ka + 384) >> 2]) + d) | 0),
                      (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      (f >>> 0 < h >>> 0) |
                      (g >>> 0 < b >>> 0) |
                      (w >>> 0 < g >>> 0)
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      ((i = ((f = 0 | c[(Ka + 388) >> 2]) + d) | 0),
                      (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      (f >>> 0 < g >>> 0) |
                      (i >>> 0 < b >>> 0) |
                      (w >>> 0 < i >>> 0)
                    ) {
                      Ma = 319
                      break a
                    }
                    if ((0 | (f = 0 | c[(z + 112) >> 2])) <= -1) {
                      Ma = 319
                      break a
                    }
                    if (
                      ((h = ((g = 0 | c[(Ka + 392) >> 2]) + (d = f << 2)) | 0),
                      (g >>> 0 < b >>> 0) | (w >>> 0 < g >>> 0))
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      (g >>> 0 < i >>> 0) |
                      (h >>> 0 < b >>> 0) |
                      (w >>> 0 < h >>> 0)
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      ((g = ((f = 0 | c[(Ka + 396) >> 2]) + d) | 0),
                      (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      (f >>> 0 < h >>> 0) |
                      (g >>> 0 < b >>> 0) |
                      (w >>> 0 < g >>> 0)
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      ((h = ((f = 0 | c[(Ka + 400) >> 2]) + d) | 0),
                      (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      (f >>> 0 < g >>> 0) |
                      (h >>> 0 < b >>> 0) |
                      (w >>> 0 < h >>> 0)
                    ) {
                      Ma = 319
                      break a
                    }
                    if ((0 | (f = 0 | c[(z + 116) >> 2])) <= -1) {
                      Ma = 319
                      break a
                    }
                    if (
                      ((i = ((g = 0 | c[(Ka + 404) >> 2]) + (f << 2)) | 0),
                      (g >>> 0 < b >>> 0) | (w >>> 0 < g >>> 0))
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      (g >>> 0 < h >>> 0) |
                      (i >>> 0 < b >>> 0) |
                      (w >>> 0 < i >>> 0)
                    ) {
                      Ma = 319
                      break a
                    }
                    if ((0 | (f = 0 | c[(z + 120) >> 2])) <= -1) {
                      Ma = 319
                      break a
                    }
                    if (
                      ((h = ((g = 0 | c[(Ka + 408) >> 2]) + (d = f << 2)) | 0),
                      (g >>> 0 < b >>> 0) | (w >>> 0 < g >>> 0))
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      (g >>> 0 < i >>> 0) |
                      (h >>> 0 < b >>> 0) |
                      (w >>> 0 < h >>> 0)
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      ((g = ((f = 0 | c[(Ka + 412) >> 2]) + d) | 0),
                      (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      (f >>> 0 < h >>> 0) |
                      (g >>> 0 < b >>> 0) |
                      (w >>> 0 < g >>> 0)
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      ((i = ((f = 0 | c[(Ka + 416) >> 2]) + d) | 0),
                      (f >>> 0 < b >>> 0) | (w >>> 0 < f >>> 0))
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      (f >>> 0 < g >>> 0) |
                      (i >>> 0 < b >>> 0) |
                      (w >>> 0 < i >>> 0)
                    ) {
                      Ma = 319
                      break a
                    }
                    if ((0 | (f = 0 | c[(z + 124) >> 2])) <= -1) {
                      Ma = 319
                      break a
                    }
                    if (
                      ((h = ((g = 0 | c[(Ka + 420) >> 2]) + (f <<= 2)) | 0),
                      (g >>> 0 < b >>> 0) | (w >>> 0 < g >>> 0))
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      (g >>> 0 < i >>> 0) |
                      (h >>> 0 < b >>> 0) |
                      (w >>> 0 < h >>> 0)
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      ((f = ((g = 0 | c[(Ka + 424) >> 2]) + f) | 0),
                      (g >>> 0 < b >>> 0) | (w >>> 0 < g >>> 0))
                    ) {
                      Ma = 319
                      break a
                    }
                    if (
                      (g >>> 0 < h >>> 0) |
                      (f >>> 0 < b >>> 0) |
                      (w >>> 0 < f >>> 0)
                    ) {
                      Ma = 319
                      break a
                    }
                  }
                } while (0)
                C = y
                  ? (ra(b),
                    (aa = (a[x >> 0] = 0) | c[Ka >> 2]),
                    (F = 0 | a[C >> 0]),
                    (q = 0 | c[aa >> 2]),
                    (b = aa),
                    (g = 0 | c[ba >> 2]),
                    aa)
                  : ((q = $), (g = aa), (b = z))
                b: do {
                  if (0 < (0 | q)) {
                    f = 0
                    do {
                      if (63 < (0 | Ac((g + (f << 6)) | 0)) >>> 0) break b
                    } while ((0 | (f = (f + 1) | 0)) < (0 | q))
                    ;(f = 0 | c[ua >> 2]),
                      (g = 0 | c[(h = (b + 48) | 0) >> 2]),
                      (i = 0)
                    do {
                      if (
                        ((ua = 0 | c[(f + (i << 2)) >> 2]),
                        (i = (i + 1) | 0),
                        ((0 | ua) < 0) | ((0 | g) <= (0 | ua)))
                      )
                        break b
                    } while ((0 | i) < (0 | q))
                    ;(k = 0 | c[Ca >> 2]),
                      (f = 0 | c[Ea >> 2]),
                      (g = 0 | c[(b + 24) >> 2]),
                      (j = 0)
                    do {
                      if (0 | (i = 0 | c[(f + (j << 2)) >> 2])) {
                        if (((0 | i) < 0) | ((0 | g) < (0 | i))) break b
                        if (
                          !(
                            (-1 < (0 | (d = 0 | c[(k + (j << 2)) >> 2]))) &
                            ((0 | d) < (0 | g))
                          )
                        )
                          break b
                        if (
                          ((Ea = (d + i) | 0) >>> 31) |
                          ((0 | g) < (0 | Ea)) |
                          0
                        )
                          break b
                      }
                    } while ((0 | (j = (j + 1) | 0)) < (0 | q))
                    ;(f = 0 | c[Y >> 2]), (g = 0)
                    do {
                      if (1 < (0 | c[(f + (g << 2)) >> 2]) >>> 0) break b
                    } while ((0 | (g = (g + 1) | 0)) < (0 | q))
                    ;(f = 0 | c[o >> 2]), (g = 0)
                    do {
                      if (1 < (0 | c[(f + (g << 2)) >> 2]) >>> 0) break b
                    } while ((0 | (g = (g + 1) | 0)) < (0 | q))
                    for (f = 0 | c[Z >> 2], g = 0; ; ) {
                      if (
                        ((Ea = 0 | c[(f + (g << 2)) >> 2]),
                        (g = (g + 1) | 0),
                        ((0 | Ea) < -1) | ((0 | q) <= (0 | Ea)))
                      )
                        break b
                      if ((0 | q) <= (0 | g)) {
                        Ma = 345
                        break
                      }
                    }
                  } else (h = (b + 48) | 0), (Ma = 345)
                } while (0)
                c: do {
                  if (345 == (0 | Ma)) {
                    ;(o = 0 | c[(b + 4) >> 2]), (f = 0 | c[t >> 2])
                    d: do {
                      if (0 < (0 | o)) {
                        g = 0
                        do {
                          if (63 < (0 | Ac((f + (g << 6)) | 0)) >>> 0) break c
                        } while ((0 | (g = (g + 1) | 0)) < (0 | o))
                        ;(g = 0 | c[n >> 2]), (l = 0 | c[h >> 2]), (f = 0)
                        do {
                          if (
                            ((Ea = 0 | c[(g + (f << 2)) >> 2]),
                            (f = (f + 1) | 0),
                            ((0 | Ea) < 0) | ((0 | l) <= (0 | Ea)))
                          )
                            break c
                        } while ((0 | f) < (0 | o))
                        ;(f = 0 | c[A >> 2]), (g = 0)
                        do {
                          if (1 < (0 | c[(f + (g << 2)) >> 2]) >>> 0) break c
                        } while ((0 | (g = (g + 1) | 0)) < (0 | o))
                        ;(f = 0 | c[u >> 2]), (g = 0)
                        do {
                          if (1 < (0 | c[(f + (g << 2)) >> 2]) >>> 0) break c
                        } while ((0 | (g = (g + 1) | 0)) < (0 | o))
                        ;(f = 0 | c[D >> 2]), (g = 0)
                        do {
                          if (
                            ((Ea = 0 | c[(f + (g << 2)) >> 2]),
                            (g = (g + 1) | 0),
                            ((0 | Ea) < -1) | ((0 | q) <= (0 | Ea)))
                          )
                            break c
                        } while ((0 | g) < (0 | o))
                        ;(f = 0 | c[B >> 2]), (g = 0)
                        do {
                          if (
                            ((Ea = 0 | c[(f + (g << 2)) >> 2]),
                            (g = (g + 1) | 0),
                            ((0 | Ea) < -1) | ((0 | o) <= (0 | Ea)))
                          )
                            break c
                        } while ((0 | g) < (0 | o))
                        ;(k = 0 | c[p >> 2]), (f = 0)
                        do {
                          if (1 < (0 | c[(k + (f << 2)) >> 2]) >>> 0) break c
                        } while ((0 | (f = (f + 1) | 0)) < (0 | o))
                        for (
                          g = 0 | c[E >> 2],
                            f = (b + 8) | 0,
                            i = (b + 12) | 0,
                            j = 0;
                          ;

                        ) {
                          switch (
                            ((h = 0 | c[(g + (j << 2)) >> 2]),
                            0 | c[(k + (j << 2)) >> 2])
                          ) {
                            case 0:
                              d = f
                              break
                            case 1:
                              d = i
                              break
                            default:
                              break c
                          }
                          if ((0 | h) <= -1) break c
                          if (((j = (j + 1) | 0), (0 | h) >= (0 | c[d >> 2])))
                            break c
                          if ((0 | o) <= (0 | j)) {
                            w = l
                            break d
                          }
                        }
                      } else (w = 0 | c[h >> 2]), (f = (b + 8) | 0)
                    } while (0)
                    if (
                      ((E = 0 | c[f >> 2]),
                      (f = 0 | c[(Ka + 76) >> 2]),
                      (B = 0 < (0 | E)))
                    ) {
                      g = 0
                      do {
                        if (
                          ((Ea = 0 | c[(f + (g << 2)) >> 2]),
                          (g = (g + 1) | 0),
                          ((0 | Ea) < 0) | ((0 | w) <= (0 | Ea)))
                        )
                          break c
                      } while ((0 | g) < (0 | E))
                      ;(f = 0 | c[ga >> 2]),
                        (g = 0 | c[Ja >> 2]),
                        (h = 0 | c[(k = (b + 28) | 0) >> 2]),
                        (j = 0)
                      do {
                        if (0 | (i = 0 | c[(g + (j << 2)) >> 2])) {
                          if (((0 | i) < 0) | ((0 | h) < (0 | i))) break c
                          if (
                            !(
                              (-1 < (0 | (d = 0 | c[(f + (j << 2)) >> 2]))) &
                              ((0 | d) < (0 | h))
                            )
                          )
                            break c
                          if (
                            ((Ea = (d + i) | 0) >>> 31) |
                            ((0 | h) < (0 | Ea)) |
                            0
                          )
                            break c
                        }
                      } while ((0 | (j = (j + 1) | 0)) < (0 | E))
                      for (
                        i = 0 | c[sa >> 2],
                          f = 0 | c[ea >> 2],
                          g = 0 | c[Ga >> 2],
                          h = 0;
                        ;

                      ) {
                        if (
                          ((ua = 0 | c[(i + (h << 2)) >> 2]),
                          (Ca = 0 | c[(f + (h << 2)) >> 2]),
                          (Ea = 0 | c[(g + (h << 2)) >> 2]),
                          (h = (h + 1) | 0),
                          !(
                            ((0 | v((Ca + 1) | 0, (ua + 1) | 0)) == (0 | Ea)) &
                            (0 < (0 | ua)) &
                            (0 < (0 | Ca)) &
                            (0 < (0 | Ea))
                          ))
                        )
                          break c
                        if ((0 | E) <= (0 | h)) {
                          D = k
                          break
                        }
                      }
                    } else D = (b + 28) | 0
                    if (
                      ((z = 0 | c[(b + 12) >> 2]),
                      (f = 0 | c[(Ka + 108) >> 2]),
                      (y = 0 < (0 | z)))
                    ) {
                      g = 0
                      do {
                        if (
                          ((Ea = 0 | c[(f + (g << 2)) >> 2]),
                          (g = (g + 1) | 0),
                          ((0 | Ea) < 0) | ((0 | w) <= (0 | Ea)))
                        )
                          break c
                      } while ((0 | g) < (0 | z))
                      for (
                        f = 0 | c[ya >> 2],
                          g = 0 | c[Ia >> 2],
                          h = 0 | c[(j = (b + 32) | 0) >> 2],
                          k = 0;
                        ;

                      ) {
                        if (0 | (i = 0 | c[(g + (k << 2)) >> 2])) {
                          if (((0 | i) < 0) | ((0 | h) < (0 | i))) break c
                          if (
                            !(
                              (-1 < (0 | (d = 0 | c[(f + (k << 2)) >> 2]))) &
                              ((0 | d) < (0 | h))
                            )
                          )
                            break c
                          if (
                            ((Ea = (d + i) | 0) >>> 31) |
                            ((0 | h) < (0 | Ea)) |
                            0
                          )
                            break c
                        }
                        if ((0 | z) <= (0 | (k = (k + 1) | 0))) {
                          m = j
                          break
                        }
                      }
                    } else m = (b + 32) | 0
                    if (
                      ((p = 0 | c[(u = (b + 16) | 0) >> 2]),
                      (f = 0 | c[ca >> 2]),
                      (n = 0 < (0 | p)))
                    ) {
                      g = 0
                      do {
                        if (63 < (0 | Ac((f + (g << 6)) | 0)) >>> 0) break c
                      } while ((0 | (g = (g + 1) | 0)) < (0 | p))
                      ;(f = 0 | c[fa >> 2]), (g = 0)
                      do {
                        if (
                          ((Ea = 0 | c[(f + (g << 2)) >> 2]),
                          (g = (g + 1) | 0),
                          ((0 | Ea) < 0) | ((0 | w) <= (0 | Ea)))
                        )
                          break c
                      } while ((0 | g) < (0 | p))
                      ;(f = 0 | c[ha >> 2]),
                        (g = 0 | c[Ha >> 2]),
                        (h = 0 | c[(l = (b + 36) | 0) >> 2]),
                        (j = 0)
                      do {
                        if (0 | (i = 0 | c[(g + (j << 2)) >> 2])) {
                          if (((0 | i) < 0) | ((0 | h) < (0 | i))) break c
                          if (
                            !(
                              (-1 < (0 | (d = 0 | c[(f + (j << 2)) >> 2]))) &
                              ((0 | d) < (0 | h))
                            )
                          )
                            break c
                          if (
                            ((Ea = (d + i) | 0) >>> 31) |
                            ((0 | h) < (0 | Ea)) |
                            0
                          )
                            break c
                        }
                      } while ((0 | (j = (j + 1) | 0)) < (0 | p))
                      ;(f = 0 | c[xa >> 2]), (g = 0)
                      do {
                        if (1 < (0 | c[(f + (g << 2)) >> 2]) >>> 0) break c
                      } while ((0 | (g = (g + 1) | 0)) < (0 | p))
                      ;(f = 0 | c[wa >> 2]), (g = 0)
                      do {
                        if (1 < (0 | c[(f + (g << 2)) >> 2]) >>> 0) break c
                      } while ((0 | (g = (g + 1) | 0)) < (0 | p))
                      ;(f = 0 | c[Aa >> 2]), (g = 0)
                      do {
                        if (
                          ((Ea = 0 | c[(f + (g << 2)) >> 2]),
                          (g = (g + 1) | 0),
                          ((0 | Ea) < -1) | ((0 | q) <= (0 | Ea)))
                        )
                          break c
                      } while ((0 | g) < (0 | p))
                      ;(f = 0 | c[za >> 2]), (g = 0)
                      do {
                        if (
                          ((Ea = 0 | c[(f + (g << 2)) >> 2]),
                          (g = (g + 1) | 0),
                          ((0 | Ea) < -1) | ((0 | o) <= (0 | Ea)))
                        )
                          break c
                      } while ((0 | g) < (0 | p))
                      ;(f = 0 | c[Ba >> 2]), (g = 0)
                      do {
                        if ((0 | c[(f + (g << 2)) >> 2]) < 0) break c
                      } while ((0 | (g = (g + 1) | 0)) < (0 | p))
                      ;(i = 0 | c[Fa >> 2]), (f = 0)
                      do {
                        if ((0 | c[(i + (f << 2)) >> 2]) < 0) break c
                      } while ((0 | (f = (f + 1) | 0)) < (0 | p))
                      ;(f = 0 | c[la >> 2]), (g = 0 | c[(b + 60) >> 2]), (h = 0)
                      do {
                        if (
                          ((Ea =
                            ((0 | c[(f + (h << 2)) >> 2]) +
                              (c[(i + (h << 2)) >> 2] << 1)) |
                            0),
                          (h = (h + 1) | 0),
                          (Ea >>> 31) | ((0 | g) < (0 | Ea)) | 0)
                        )
                          break c
                      } while ((0 | h) < (0 | p))
                      ;(j = 0 | c[qa >> 2]),
                        (f = 0 | c[ka >> 2]),
                        (g = 0 | c[(b + 64) >> 2]),
                        (d = 0)
                      do {
                        if (0 | (h = 0 | c[(f + (d << 2)) >> 2])) {
                          if (((0 | h) < 0) | ((0 | g) < (0 | h))) break c
                          if (
                            !(
                              (-1 < (0 | (i = 0 | c[(j + (d << 2)) >> 2]))) &
                              ((0 | i) < (0 | g))
                            )
                          )
                            break c
                          if (
                            ((Ea = (i + h) | 0) >>> 31) |
                            ((0 | g) < (0 | Ea)) |
                            0
                          )
                            break c
                        }
                      } while ((0 | (d = (d + 1) | 0)) < (0 | p))
                      for (
                        j = 0 | c[va >> 2],
                          f = 0 | c[ta >> 2],
                          g = 0 | c[(k = (b + 68) | 0) >> 2],
                          d = 0;
                        ;

                      ) {
                        if (0 | (h = 0 | c[(f + (d << 2)) >> 2])) {
                          if (((0 | h) < 0) | ((0 | g) < (0 | h))) break c
                          if (
                            !(
                              (-1 < (0 | (i = 0 | c[(j + (d << 2)) >> 2]))) &
                              ((0 | i) < (0 | g))
                            )
                          )
                            break c
                          if (
                            ((Ea = (i + h) | 0) >>> 31) |
                            ((0 | g) < (0 | Ea)) |
                            0
                          )
                            break c
                        }
                        if ((0 | p) <= (0 | (d = (d + 1) | 0))) {
                          x = l
                          break
                        }
                      }
                    } else (x = (b + 36) | 0), (k = (b + 68) | 0)
                    if (
                      ((A = 0 | c[(b + 20) >> 2]),
                      (f = 0 | c[Da >> 2]),
                      (t = 0 < (0 | A)))
                    ) {
                      g = 0
                      do {
                        if (63 < (0 | Ac((f + (g << 6)) | 0)) >>> 0) break c
                      } while ((0 | (g = (g + 1) | 0)) < (0 | A))
                      ;(f = 0 | c[na >> 2]), (g = 0)
                      do {
                        if (1 < (0 | c[(f + (g << 2)) >> 2]) >>> 0) break c
                      } while ((0 | (g = (g + 1) | 0)) < (0 | A))
                      ;(f = 0 | c[ma >> 2]), (g = 0)
                      do {
                        if ((0 | c[(f + (g << 2)) >> 2]) < 0) break c
                      } while ((0 | (g = (g + 1) | 0)) < (0 | A))
                      for (
                        j = 0 | c[oa >> 2],
                          f = 0 | c[ja >> 2],
                          g = 0 | c[(b + 52) >> 2],
                          d = 0;
                        ;

                      ) {
                        if (0 | (h = 0 | c[(f + (d << 2)) >> 2])) {
                          if (((0 | h) < 0) | ((0 | g) < (0 | h))) break c
                          if (
                            !(
                              (-1 < (0 | (i = 0 | c[(j + (d << 2)) >> 2]))) &
                              ((0 | i) < (0 | g))
                            )
                          )
                            break c
                          if (
                            ((Ea = (i + h) | 0) >>> 31) |
                            ((0 | g) < (0 | Ea)) |
                            0
                          )
                            break c
                        }
                        if ((0 | A) <= (0 | (d = (d + 1) | 0))) {
                          l = g
                          break
                        }
                      }
                    } else l = 0 | c[(b + 52) >> 2]
                    if (
                      ((h = 0 | c[Ga >> 2]),
                      (f = 0 | c[da >> 2]),
                      (i = 0 | c[(b + 40) >> 2]),
                      B)
                    ) {
                      g = 0
                      do {
                        if (
                          ((Ga =
                            ((0 | c[(f + (g << 2)) >> 2]) +
                              (c[(h + (g << 2)) >> 2] << 1)) |
                            0),
                          (g = (g + 1) | 0),
                          (Ga >>> 31) | ((0 | i) < (0 | Ga)) | 0)
                        )
                          break c
                      } while ((0 | g) < (0 | E))
                    }
                    if (
                      ((h = 0 | c[m >> 2]), (f = 0 | c[r >> 2]), 0 < (0 | h))
                    ) {
                      g = 0
                      do {
                        if (1 < (0 | c[(f + (g << 2)) >> 2]) >>> 0) break c
                      } while ((0 | (g = (g + 1) | 0)) < (0 | h))
                      ;(f = 0 | c[X >> 2]), (g = 0)
                      do {
                        if (1 < (0 | c[(f + (g << 2)) >> 2]) >>> 0) break c
                      } while ((0 | (g = (g + 1) | 0)) < (0 | h))
                    }
                    if (((r = 0 | c[Fa >> 2]), (g = 0 | c[W >> 2]), n)) {
                      f = 0
                      do {
                        if (
                          ((Ga =
                            ((0 | c[(g + (f << 2)) >> 2]) +
                              (c[(r + (f << 2)) >> 2] << 1)) |
                            0),
                          (f = (f + 1) | 0),
                          (Ga >>> 31) | ((0 | i) < (0 | Ga)) | 0)
                        )
                          break c
                      } while ((0 | f) < (0 | p))
                    }
                    if (
                      ((j = 0 | c[(b + 44) >> 2]),
                      (f = 0 | c[V >> 2]),
                      0 < (0 | j))
                    ) {
                      g = 0
                      do {
                        if (
                          ((Ga = 0 | c[(f + (g << 2)) >> 2]),
                          (g = (g + 1) | 0),
                          ((0 | Ga) < 0) | ((0 | l) <= (0 | Ga)))
                        )
                          break c
                      } while ((0 | g) < (0 | j))
                    }
                    if (
                      ((d = 0 | c[(Ka + 340) >> 2]),
                      (f = 0 | c[U >> 2]),
                      0 < (0 | w))
                    ) {
                      i = 0
                      do {
                        if (0 | (g = 0 | c[(f + (i << 2)) >> 2])) {
                          if (((0 | g) < 0) | ((0 | j) < (0 | g))) break c
                          if (
                            !(
                              (-1 < (0 | (h = 0 | c[(d + (i << 2)) >> 2]))) &
                              ((0 | h) < (0 | j))
                            )
                          )
                            break c
                          if (
                            ((Ga = (h + g) | 0) >>> 31) |
                            ((0 | j) < (0 | Ga)) |
                            0
                          )
                            break c
                        }
                      } while ((0 | (i = (i + 1) | 0)) < (0 | w))
                    }
                    if (
                      ((d = 0 | c[(Ka + 328) >> 2]),
                      (f = 0 | c[s >> 2]),
                      (s = 0 | c[(b + 56) >> 2]),
                      0 < (0 | l))
                    ) {
                      i = 0
                      do {
                        if (0 | (g = 0 | c[(f + (i << 2)) >> 2])) {
                          if (((0 | g) < 0) | ((0 | s) < (0 | g))) break c
                          if (
                            !(
                              (-1 < (0 | (h = 0 | c[(d + (i << 2)) >> 2]))) &
                              ((0 | h) < (0 | s))
                            )
                          )
                            break c
                          if (
                            ((Ga = (h + g) | 0) >>> 31) |
                            ((0 | s) < (0 | Ga)) |
                            0
                          )
                            break c
                        }
                      } while ((0 | (i = (i + 1) | 0)) < (0 | l))
                    }
                    if (
                      ((h = 0 | c[k >> 2]), (f = 0 | c[T >> 2]), 0 < (0 | h))
                    ) {
                      g = 0
                      do {
                        if (
                          ((Ga = 0 | c[(f + (g << 2)) >> 2]),
                          (g = (g + 1) | 0),
                          ((0 | Ga) < -1) | ((0 | p) <= (0 | Ga)))
                        )
                          break c
                      } while ((0 | g) < (0 | h))
                    }
                    if (
                      ((k = 0 | c[(b + 72) >> 2]),
                      (d = 0 | c[(Ka + 444) >> 2]),
                      (f = 0 | c[R >> 2]),
                      (j = 0 | c[(b + 76) >> 2]),
                      0 < (0 | k))
                    ) {
                      i = 0
                      do {
                        if (0 | (g = 0 | c[(f + (i << 2)) >> 2])) {
                          if (((0 | g) < 0) | ((0 | j) < (0 | g))) break c
                          if (
                            !(
                              (-1 < (0 | (h = 0 | c[(d + (i << 2)) >> 2]))) &
                              ((0 | h) < (0 | j))
                            )
                          )
                            break c
                          if (
                            ((Ga = (h + g) | 0) >>> 31) |
                            ((0 | j) < (0 | Ga)) |
                            0
                          )
                            break c
                        }
                      } while ((0 | (i = (i + 1) | 0)) < (0 | k))
                    }
                    if (((d = 0 | c[(Ka + 464) >> 2]), 0 < (0 | j))) {
                      f = 0
                      do {
                        if (1 < (0 | c[(d + (f << 2)) >> 2]) >>> 0) break c
                      } while ((0 | (f = (f + 1) | 0)) < (0 | j))
                      ;(f = 0 | c[K >> 2]), (i = 0)
                      do {
                        switch (
                          ((g = 0 | c[(f + (i << 2)) >> 2]),
                          0 | c[(d + (i << 2)) >> 2])
                        ) {
                          case 0:
                            h = u
                            break
                          case 1:
                            h = C
                            break
                          default:
                            break c
                        }
                        if ((0 | g) <= -1) break c
                        if (((i = (i + 1) | 0), (0 | g) >= (0 | c[h >> 2])))
                          break c
                      } while ((0 | i) < (0 | j))
                      ;(f = 0 | c[Q >> 2]), (g = 0)
                      do {
                        if (
                          ((Ga = 0 | c[(f + (g << 2)) >> 2]),
                          (g = (g + 1) | 0),
                          ((0 | Ga) < -1) | ((0 | k) <= (0 | Ga)))
                        )
                          break c
                      } while ((0 | g) < (0 | j))
                    }
                    if (
                      ((q = 0 | c[(b + 80) >> 2]),
                      (f = 0 | c[J >> 2]),
                      0 < (0 | q))
                    ) {
                      g = 0
                      do {
                        if (63 < (0 | Ac((f + (g << 6)) | 0)) >>> 0) break c
                      } while ((0 | (g = (g + 1) | 0)) < (0 | q))
                      ;(f = 0 | c[H >> 2]), (g = 0)
                      do {
                        if (
                          ((Ga = 0 | c[(f + (g << 2)) >> 2]),
                          (g = (g + 1) | 0),
                          ((0 | Ga) < 0) | ((0 | w) <= (0 | Ga)))
                        )
                          break c
                      } while ((0 | g) < (0 | q))
                      ;(j = 0 | c[I >> 2]),
                        (f = 0 | c[G >> 2]),
                        (g = 0 | c[(b + 88) >> 2]),
                        (d = 0)
                      do {
                        if (0 | (h = 0 | c[(f + (d << 2)) >> 2])) {
                          if (((0 | h) < 0) | ((0 | g) < (0 | h))) break c
                          if (
                            !(
                              (-1 < (0 | (i = 0 | c[(j + (d << 2)) >> 2]))) &
                              ((0 | i) < (0 | g))
                            )
                          )
                            break c
                          if (
                            ((Ga = (i + h) | 0) >>> 31) |
                            ((0 | g) < (0 | Ga)) |
                            0
                          )
                            break c
                        }
                      } while ((0 | (d = (d + 1) | 0)) < (0 | q))
                      ;(p = 0 | c[L >> 2]), (o = 0 | c[u >> 2]), (f = 0)
                      do {
                        if (
                          ((Ga = 0 | c[(p + (f << 2)) >> 2]),
                          (f = (f + 1) | 0),
                          ((0 | Ga) < 0) | ((0 | o) <= (0 | Ga)))
                        )
                          break c
                      } while ((0 | f) < (0 | q))
                      ;(n = 0 | c[O >> 2]), (f = 0)
                      do {
                        if (
                          ((Ga = 0 | c[(n + (f << 2)) >> 2]),
                          (f = (f + 1) | 0),
                          ((0 | Ga) < 0) | ((0 | o) <= (0 | Ga)))
                        )
                          break c
                      } while ((0 | f) < (0 | q))
                      ;(m = 0 | c[P >> 2]),
                        (l = 0 | c[M >> 2]),
                        (f = 0 | c[(b + 84) >> 2]),
                        (i = 0)
                      do {
                        if (0 | (g = 0 | c[(l + (i << 2)) >> 2])) {
                          if (((0 | g) < 0) | ((0 | f) < (0 | g))) break c
                          if (
                            !(
                              (-1 < (0 | (h = 0 | c[(m + (i << 2)) >> 2]))) &
                              ((0 | h) < (0 | f))
                            )
                          )
                            break c
                          if (
                            ((Ga = (h + g) | 0) >>> 31) |
                            ((0 | f) < (0 | Ga)) |
                            0
                          )
                            break c
                        }
                      } while ((0 | (i = (i + 1) | 0)) < (0 | q))
                      ;(f = 0 | c[N >> 2]), (j = 0)
                      do {
                        if (
                          ((g =
                            0 | c[(r + (c[(p + (j << 2)) >> 2] << 2)) >> 2]),
                          (h = 0 | c[(r + (c[(n + (j << 2)) >> 2] << 2)) >> 2]),
                          (i = 0 | c[(l + (j << 2)) >> 2]),
                          (d = (f + (c[(m + (j << 2)) >> 2] << 1)) | 0),
                          0 < (0 | i))
                        ) {
                          k = 0
                          do {
                            if (
                              !(
                                (0 | g) > (0 | e[(d + (k << 1)) >> 1]) &&
                                (0 | h) > (0 | e[(d + ((1 | k) << 1)) >> 1])
                              )
                            )
                              break c
                          } while ((0 | (k = (k + 2) | 0)) < (0 | i))
                        }
                      } while ((0 | (j = (j + 1) | 0)) < (0 | q))
                    } else o = 0 | c[u >> 2]
                    if ((255 & F) <= 1) {
                      f = 1
                      break a
                    }
                    if (((f = 0 | c[(Ka + 104) >> 2]), B)) {
                      g = 0
                      do {
                        if (1 < (0 | c[(f + (g << 2)) >> 2]) >>> 0) break c
                      } while ((0 | (g = (g + 1) | 0)) < (0 | E))
                    }
                    if ((255 & F) <= 3) {
                      f = 1
                      break a
                    }
                    if (
                      ((f = 0 | c[(Ka + 264) >> 2]),
                      (g = 0 | c[(Ka + 268) >> 2]),
                      t)
                    ) {
                      d = 0
                      do {
                        if (0 | (h = 0 | c[(g + (d << 2)) >> 2])) {
                          if (((0 | h) < 0) | ((0 | s) < (0 | h))) break c
                          if (
                            !(
                              (-1 < (0 | (i = 0 | c[(f + (d << 2)) >> 2]))) &
                              ((0 | i) < (0 | s))
                            )
                          )
                            break c
                          if (
                            ((Ga = (i + h) | 0) >>> 31) |
                            ((0 | s) < (0 | Ga)) |
                            0
                          )
                            break c
                        }
                      } while ((0 | (d = (d + 1) | 0)) < (0 | A))
                    }
                    if (
                      (0 | (j = 0 | c[(b + 92) >> 2])) !=
                      (0 | c[(b + 96) >> 2])
                    )
                      break
                    if (
                      ((d = 0 | c[(Ka + 88) >> 2]), (i = 0 | c[Ja >> 2]), B)
                    ) {
                      h = 0
                      do {
                        if (0 | (f = 0 | c[(i + (h << 2)) >> 2])) {
                          if (((0 | f) < 0) | ((0 | j) < (0 | f))) break c
                          if (
                            !(
                              (-1 < (0 | (g = 0 | c[(d + (h << 2)) >> 2]))) &
                              ((0 | g) < (0 | j))
                            )
                          )
                            break c
                          if (
                            ((Ja = (g + f) | 0) >>> 31) |
                            ((0 | j) < (0 | Ja)) |
                            0
                          )
                            break c
                        }
                      } while ((0 | (h = (h + 1) | 0)) < (0 | E))
                    }
                    if (
                      ((d = 0 | c[(Ka + 120) >> 2]), (i = 0 | c[Ia >> 2]), y)
                    ) {
                      h = 0
                      do {
                        if (0 | (f = 0 | c[(i + (h << 2)) >> 2])) {
                          if (((0 | f) < 0) | ((0 | j) < (0 | f))) break c
                          if (
                            !(
                              (-1 < (0 | (g = 0 | c[(d + (h << 2)) >> 2]))) &
                              ((0 | g) < (0 | j))
                            )
                          )
                            break c
                          if (
                            ((Ja = (g + f) | 0) >>> 31) |
                            ((0 | j) < (0 | Ja)) |
                            0
                          )
                            break c
                        }
                      } while ((0 | (h = (h + 1) | 0)) < (0 | z))
                    }
                    if (
                      ((d = 0 | c[(Ka + 160) >> 2]),
                      (f = 0 | c[Ha >> 2]),
                      0 < (0 | o))
                    ) {
                      i = 0
                      do {
                        if (0 | (g = 0 | c[(f + (i << 2)) >> 2])) {
                          if (((0 | g) < 0) | ((0 | j) < (0 | g))) break c
                          if (
                            !(
                              (-1 < (0 | (h = 0 | c[(d + (i << 2)) >> 2]))) &
                              ((0 | h) < (0 | j))
                            )
                          )
                            break c
                          if (
                            ((Ja = (h + g) | 0) >>> 31) |
                            ((0 | j) < (0 | Ja)) |
                            0
                          )
                            break c
                        }
                      } while ((0 | (i = (i + 1) | 0)) < (0 | o))
                    }
                    if (((g = 0 | c[(Ka + 240) >> 2]), t)) {
                      f = 0
                      do {
                        if (1 < (0 | c[(g + (f << 2)) >> 2]) >>> 0) break c
                      } while ((0 | (f = (f + 1) | 0)) < (0 | A))
                      for (
                        f = 0 | c[(Ka + 252) >> 2],
                          g = 0 | c[(Ka + 256) >> 2],
                          h = 0 | c[(b + 100) >> 2],
                          j = 0;
                        ;

                      ) {
                        if (0 | (i = 0 | c[(g + (j << 2)) >> 2])) {
                          if (((0 | i) < 0) | ((0 | h) < (0 | i))) break c
                          if (
                            !(
                              (-1 < (0 | (d = 0 | c[(f + (j << 2)) >> 2]))) &
                              ((0 | d) < (0 | h))
                            )
                          )
                            break c
                          if (
                            ((Ja = (d + i) | 0) >>> 31) |
                            ((0 | h) < (0 | Ja)) |
                            0
                          )
                            break c
                        }
                        if ((0 | A) <= (0 | (j = (j + 1) | 0))) {
                          j = h
                          break
                        }
                      }
                    } else j = 0 | c[(b + 100) >> 2]
                    if (
                      ((f = 0 | c[(Ka + 348) >> 2]),
                      (d = 0 | c[(Ka + 352) >> 2]),
                      0 < (0 | j))
                    ) {
                      i = 0
                      do {
                        if (0 | (g = 0 | c[(d + (i << 2)) >> 2])) {
                          if (((0 | g) < 0) | ((0 | s) < (0 | g))) break c
                          if (
                            !(
                              (-1 < (0 | (h = 0 | c[(f + (i << 2)) >> 2]))) &
                              ((0 | h) < (0 | s))
                            )
                          )
                            break c
                          if (
                            ((Ja = (h + g) | 0) >>> 31) |
                            ((0 | s) < (0 | Ja)) |
                            0
                          )
                            break c
                        }
                      } while ((0 | (i = (i + 1) | 0)) < (0 | j))
                      ;(f = 0 | c[(Ka + 356) >> 2]), (h = 0)
                      do {
                        if ((0 | (g = 0 | c[(f + (h << 2)) >> 2])) <= -1)
                          break c
                        if ((0 | g) >= (0 | c[(d + (h << 2)) >> 2])) break c
                      } while ((0 | (h = (h + 1) | 0)) < (0 | j))
                    }
                    if (
                      ((n = 0 | c[(b + 104) >> 2]),
                      (f = 0 | c[(Ka + 360) >> 2]),
                      0 < (0 | n))
                    ) {
                      g = 0
                      do {
                        if (
                          ((Ja = 0 | c[(f + (g << 2)) >> 2]),
                          (g = (g + 1) | 0),
                          ((0 | Ja) < 0) | ((0 | j) <= (0 | Ja)))
                        )
                          break c
                      } while ((0 | g) < (0 | n))
                      for (
                        f = 0 | c[(Ka + 372) >> 2],
                          g = 0 | c[(Ka + 376) >> 2],
                          h = 0 | c[(b + 116) >> 2],
                          j = 0;
                        ;

                      ) {
                        if (0 | (i = 0 | c[(g + (j << 2)) >> 2])) {
                          if (((0 | i) < 0) | ((0 | h) < (0 | i))) break c
                          if (
                            !(
                              (-1 < (0 | (d = 0 | c[(f + (j << 2)) >> 2]))) &
                              ((0 | d) < (0 | h))
                            )
                          )
                            break c
                          if (
                            ((Ja = (d + i) | 0) >>> 31) |
                            ((0 | h) < (0 | Ja)) |
                            0
                          )
                            break c
                        }
                        if ((0 | n) <= (0 | (j = (j + 1) | 0))) {
                          m = h
                          break
                        }
                      }
                    } else m = 0 | c[(b + 116) >> 2]
                    if (
                      ((l = 0 | c[(b + 108) >> 2]),
                      (f = 0 | c[(Ka + 380) >> 2]),
                      0 < (0 | l))
                    ) {
                      g = 0
                      do {
                        if (
                          ((Ja = 0 | c[(f + (g << 2)) >> 2]),
                          (g = (g + 1) | 0),
                          ((0 | Ja) < 0) | ((0 | E) <= (0 | Ja)))
                        )
                          break c
                      } while ((0 | g) < (0 | l))
                      ;(k = 0 | c[(Ka + 384) >> 2]),
                        (f = 0 | c[(Ka + 388) >> 2]),
                        (i = 0)
                      do {
                        if (0 | (g = 0 | c[(f + (i << 2)) >> 2])) {
                          if (((0 | g) < 0) | ((0 | n) < (0 | g))) break c
                          if (
                            !(
                              (-1 < (0 | (h = 0 | c[(k + (i << 2)) >> 2]))) &
                              ((0 | h) < (0 | n))
                            )
                          )
                            break c
                          if (
                            ((Ja = (h + g) | 0) >>> 31) |
                            ((0 | n) < (0 | Ja)) |
                            0
                          )
                            break c
                        }
                      } while ((0 | (i = (i + 1) | 0)) < (0 | l))
                      ;(j = 0 | c[(Ka + 364) >> 2]),
                        (d = 0 | c[(Ka + 368) >> 2]),
                        (f = 0 | c[D >> 2]),
                        (i = 0)
                      do {
                        if (
                          ((g = 0 | c[(k + (i << 2)) >> 2]),
                          0 | (h = 0 | c[(d + (g << 2)) >> 2]))
                        ) {
                          if (((0 | h) < 0) | ((0 | f) < (0 | h))) break c
                          if (
                            !(
                              (-1 < (0 | (Ia = 0 | c[(j + (g << 2)) >> 2]))) &
                              ((0 | Ia) < (0 | f)) &
                              (0 ==
                                (((Ja = (Ia + h) | 0) >>> 31) |
                                  ((0 | f) < (0 | Ja)) |
                                  0))
                            )
                          )
                            break c
                        }
                      } while ((0 | (i = (i + 1) | 0)) < (0 | l))
                    } else
                      (d = 0 | c[(Ka + 368) >> 2]), (j = 0 | c[(Ka + 364) >> 2])
                    if (
                      ((l = 0 | c[(b + 112) >> 2]),
                      (f = 0 | c[(Ka + 392) >> 2]),
                      0 < (0 | l))
                    ) {
                      g = 0
                      do {
                        if (
                          ((Ja = 0 | c[(f + (g << 2)) >> 2]),
                          (g = (g + 1) | 0),
                          ((0 | Ja) < 0) | ((0 | o) <= (0 | Ja)))
                        )
                          break c
                      } while ((0 | g) < (0 | l))
                      ;(k = 0 | c[(Ka + 396) >> 2]),
                        (f = 0 | c[(Ka + 400) >> 2]),
                        (i = 0)
                      do {
                        if (0 | (g = 0 | c[(f + (i << 2)) >> 2])) {
                          if (((0 | g) < 0) | ((0 | n) < (0 | g))) break c
                          if (
                            !(
                              (-1 < (0 | (h = 0 | c[(k + (i << 2)) >> 2]))) &
                              ((0 | h) < (0 | n))
                            )
                          )
                            break c
                          if (
                            ((Ja = (h + g) | 0) >>> 31) |
                            ((0 | n) < (0 | Ja)) |
                            0
                          )
                            break c
                        }
                      } while ((0 | (i = (i + 1) | 0)) < (0 | l))
                      ;(f = 0 | c[x >> 2]), (i = 0)
                      do {
                        if (
                          ((g = 0 | c[(k + (i << 2)) >> 2]),
                          0 | (h = 0 | c[(d + (g << 2)) >> 2]))
                        ) {
                          if (((0 | h) < 0) | ((0 | f) < (0 | h))) break c
                          if (
                            !(
                              (-1 < (0 | (Ia = 0 | c[(j + (g << 2)) >> 2]))) &
                              ((0 | Ia) < (0 | f)) &
                              (0 ==
                                (((Ja = (Ia + h) | 0) >>> 31) |
                                  ((0 | f) < (0 | Ja)) |
                                  0))
                            )
                          )
                            break c
                        }
                      } while ((0 | (i = (i + 1) | 0)) < (0 | l))
                    }
                    if (
                      ((f = 0 | c[(Ka + 404) >> 2]),
                      (k = 0 | c[(b + 120) >> 2]),
                      0 < (0 | m))
                    ) {
                      g = 0
                      do {
                        if (
                          ((Ja = 0 | c[(f + (g << 2)) >> 2]),
                          (g = (g + 1) | 0),
                          ((0 | Ja) < 0) | ((0 | k) <= (0 | Ja)))
                        )
                          break c
                      } while ((0 | g) < (0 | m))
                    }
                    if (((f = 0 | c[(Ka + 408) >> 2]), (0 | k) <= 0)) {
                      f = 1
                      break a
                    }
                    g = 0
                    do {
                      if (
                        ((Ja = 0 | c[(f + (g << 2)) >> 2]),
                        (g = (g + 1) | 0),
                        ((0 | Ja) < -1) | ((0 | A) <= (0 | Ja)))
                      )
                        break c
                    } while ((0 | g) < (0 | k))
                    for (
                      j = 0 | c[(Ka + 412) >> 2],
                        d = 0 | c[(Ka + 416) >> 2],
                        f = 0 | c[(b + 124) >> 2],
                        i = 0;
                      ;

                    ) {
                      if (0 | (g = 0 | c[(d + (i << 2)) >> 2])) {
                        if (((0 | g) < 0) | ((0 | f) < (0 | g))) break c
                        if (
                          !(
                            (-1 < (0 | (h = 0 | c[(j + (i << 2)) >> 2]))) &
                            ((0 | h) < (0 | f))
                          )
                        )
                          break c
                        if (
                          ((Ka = (h + g) | 0) >>> 31) |
                          ((0 | f) < (0 | Ka)) |
                          0
                        )
                          break c
                      }
                      if ((0 | k) <= (0 | (i = (i + 1) | 0))) {
                        f = 1
                        break a
                      }
                    }
                  }
                } while (0)
                ia(0, 1336, La), (f = 0)
              }
            } while (0)
            return (
              319 == (0 | Ma) &&
                (ia(0, 1277, _), sb(C, 1), tb((b + 64) | 0, 4, 160), (f = 0)),
              (S = Na),
              0 | (Ma = f)
            )
          }
          function ra(b) {
            var f,
              e,
              d = 0 | a[((b |= 0) + 4) >> 0]
            tb(0 | c[(e = (b + 704) | 0) >> 2], 4, 32),
              sb(0 | c[(f = (b + 708) | 0) >> 2], 4),
              sb((4 + (0 | c[f >> 2])) | 0, 4),
              sb((8 + (0 | c[f >> 2])) | 0, 4),
              sb((12 + (0 | c[f >> 2])) | 0, 4),
              sb((16 + (0 | c[f >> 2])) | 0, 4),
              sb((20 + (0 | c[f >> 2])) | 0, 1),
              tb(0 | c[(b + 720) >> 2], 4, 0 | c[c[e >> 2] >> 2]),
              tb(0 | c[(b + 724) >> 2], 4, 0 | c[c[e >> 2] >> 2]),
              tb(0 | c[(b + 728) >> 2], 4, 0 | c[c[e >> 2] >> 2]),
              tb(0 | c[(b + 732) >> 2], 4, 0 | c[c[e >> 2] >> 2]),
              tb(0 | c[(b + 736) >> 2], 4, 0 | c[c[e >> 2] >> 2]),
              tb(0 | c[(b + 740) >> 2], 4, 0 | c[c[e >> 2] >> 2]),
              tb(0 | c[(b + 752) >> 2], 4, 0 | c[(4 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 756) >> 2], 4, 0 | c[(4 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 760) >> 2], 4, 0 | c[(4 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 764) >> 2], 4, 0 | c[(4 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 768) >> 2], 4, 0 | c[(4 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 772) >> 2], 4, 0 | c[(4 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 776) >> 2], 4, 0 | c[(4 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 780) >> 2], 4, 0 | c[(8 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 784) >> 2], 4, 0 | c[(8 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 788) >> 2], 4, 0 | c[(8 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 796) >> 2], 4, 0 | c[(8 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 800) >> 2], 4, 0 | c[(8 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 804) >> 2], 4, 0 | c[(8 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 812) >> 2], 4, 0 | c[(12 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 816) >> 2], 4, 0 | c[(12 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 820) >> 2], 4, 0 | c[(12 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 828) >> 2], 4, 0 | c[(12 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 852) >> 2], 4, 0 | c[(16 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 856) >> 2], 4, 0 | c[(16 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 860) >> 2], 4, 0 | c[(16 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 868) >> 2], 4, 0 | c[(16 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 872) >> 2], 4, 0 | c[(16 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 876) >> 2], 4, 0 | c[(16 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 880) >> 2], 4, 0 | c[(16 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 884) >> 2], 4, 0 | c[(16 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 888) >> 2], 1, 0 | c[(16 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 892) >> 2], 4, 0 | c[(16 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 896) >> 2], 4, 0 | c[(16 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 900) >> 2], 4, 0 | c[(16 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 904) >> 2], 4, 0 | c[(16 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 908) >> 2], 4, 0 | c[(16 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 912) >> 2], 4, 0 | c[(16 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 924) >> 2], 4, 0 | c[(20 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 928) >> 2], 4, 0 | c[(20 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 932) >> 2], 4, 0 | c[(20 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 936) >> 2], 4, 0 | c[(20 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 940) >> 2], 4, 0 | c[(20 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 948) >> 2], 4, 0 | c[(20 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 952) >> 2], 4, 0 | c[(20 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 976) >> 2], 4, 0 | c[(24 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 980) >> 2], 4, 0 | c[(28 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 984) >> 2], 4, 0 | c[(28 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 988) >> 2], 4, 0 | c[(32 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 992) >> 2], 4, 0 | c[(32 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 996) >> 2], 4, 0 | c[(32 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 1e3) >> 2], 4, 0 | c[(32 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 1004) >> 2], 4, 0 | c[(32 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 1008) >> 2], 4, 0 | c[(32 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 1012) >> 2], 4, 0 | c[(32 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 1016) >> 2], 4, 0 | c[(36 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 1020) >> 2], 4, 0 | c[(36 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 1024) >> 2], 4, 0 | c[(36 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 1028) >> 2], 4, 0 | c[(40 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 1040) >> 2], 4, 0 | c[(44 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 1044) >> 2], 4, 0 | c[(48 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 1048) >> 2], 4, 0 | c[(48 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 1032) >> 2], 4, 0 | c[(52 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 1036) >> 2], 4, 0 | c[(52 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 1132) >> 2], 4, 0 | c[(56 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 1136) >> 2], 4, 0 | c[(60 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 1140) >> 2], 2, 0 | c[(64 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 1144) >> 2], 4, 0 | c[(68 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 1148) >> 2], 4, 0 | c[(72 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 1152) >> 2], 4, 0 | c[(72 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 1156) >> 2], 4, 0 | c[(72 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 1160) >> 2], 4, 0 | c[(72 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 1164) >> 2], 4, 0 | c[(72 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 1168) >> 2], 4, 0 | c[(76 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 1172) >> 2], 4, 0 | c[(76 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 1176) >> 2], 4, 0 | c[(76 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 1188) >> 2], 4, 0 | c[(80 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 1192) >> 2], 4, 0 | c[(80 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 1196) >> 2], 4, 0 | c[(80 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 1200) >> 2], 4, 0 | c[(80 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 1204) >> 2], 4, 0 | c[(80 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 1208) >> 2], 4, 0 | c[(80 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 1212) >> 2], 4, 0 | c[(80 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 1216) >> 2], 4, 0 | c[(84 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 1220) >> 2], 2, 0 | c[(84 + (0 | c[e >> 2])) >> 2]),
              tb(0 | c[(b + 1224) >> 2], 4, 0 | c[(88 + (0 | c[e >> 2])) >> 2]),
              (255 & d) <= 1 ||
                (tb(
                  0 | c[(b + 808) >> 2],
                  4,
                  0 | c[(8 + (0 | c[e >> 2])) >> 2]
                ),
                (255 & d) <= 3 ||
                  (tb(
                    0 | c[(b + 968) >> 2],
                    4,
                    0 | c[(20 + (0 | c[e >> 2])) >> 2]
                  ),
                  tb(
                    0 | c[(b + 972) >> 2],
                    4,
                    0 | c[(20 + (0 | c[e >> 2])) >> 2]
                  ),
                  tb(
                    0 | c[(b + 792) >> 2],
                    4,
                    0 | c[(8 + (0 | c[e >> 2])) >> 2]
                  ),
                  tb(
                    0 | c[(b + 824) >> 2],
                    4,
                    0 | c[(12 + (0 | c[e >> 2])) >> 2]
                  ),
                  tb(
                    0 | c[(b + 864) >> 2],
                    4,
                    0 | c[(16 + (0 | c[e >> 2])) >> 2]
                  ),
                  tb(
                    0 | c[(b + 1228) >> 2],
                    4,
                    0 | c[(92 + (0 | c[e >> 2])) >> 2]
                  ),
                  tb(
                    0 | c[(b + 1232) >> 2],
                    4,
                    0 | c[(92 + (0 | c[e >> 2])) >> 2]
                  ),
                  tb(
                    0 | c[(b + 1236) >> 2],
                    4,
                    0 | c[(92 + (0 | c[e >> 2])) >> 2]
                  ),
                  tb(
                    0 | c[(b + 1240) >> 2],
                    4,
                    0 | c[(96 + (0 | c[e >> 2])) >> 2]
                  ),
                  tb(
                    0 | c[(b + 1244) >> 2],
                    4,
                    0 | c[(96 + (0 | c[e >> 2])) >> 2]
                  ),
                  tb(
                    0 | c[(b + 1248) >> 2],
                    4,
                    0 | c[(96 + (0 | c[e >> 2])) >> 2]
                  ),
                  tb(
                    0 | c[(b + 944) >> 2],
                    4,
                    0 | c[(20 + (0 | c[e >> 2])) >> 2]
                  ),
                  tb(
                    0 | c[(b + 956) >> 2],
                    4,
                    0 | c[(20 + (0 | c[e >> 2])) >> 2]
                  ),
                  tb(
                    0 | c[(b + 960) >> 2],
                    4,
                    0 | c[(20 + (0 | c[e >> 2])) >> 2]
                  ),
                  tb(
                    0 | c[(b + 1052) >> 2],
                    4,
                    0 | c[(100 + (0 | c[e >> 2])) >> 2]
                  ),
                  tb(
                    0 | c[(b + 1056) >> 2],
                    4,
                    0 | c[(100 + (0 | c[e >> 2])) >> 2]
                  ),
                  tb(
                    0 | c[(b + 1060) >> 2],
                    4,
                    0 | c[(100 + (0 | c[e >> 2])) >> 2]
                  ),
                  tb(
                    0 | c[(b + 1064) >> 2],
                    4,
                    0 | c[(104 + (0 | c[e >> 2])) >> 2]
                  ),
                  tb(
                    0 | c[(b + 1068) >> 2],
                    4,
                    0 | c[(104 + (0 | c[e >> 2])) >> 2]
                  ),
                  tb(
                    0 | c[(b + 1072) >> 2],
                    4,
                    0 | c[(104 + (0 | c[e >> 2])) >> 2]
                  ),
                  tb(
                    0 | c[(b + 1076) >> 2],
                    4,
                    0 | c[(104 + (0 | c[e >> 2])) >> 2]
                  ),
                  tb(
                    0 | c[(b + 1080) >> 2],
                    4,
                    0 | c[(104 + (0 | c[e >> 2])) >> 2]
                  ),
                  tb(
                    0 | c[(b + 1084) >> 2],
                    4,
                    0 | c[(108 + (0 | c[e >> 2])) >> 2]
                  ),
                  tb(
                    0 | c[(b + 1088) >> 2],
                    4,
                    0 | c[(108 + (0 | c[e >> 2])) >> 2]
                  ),
                  tb(
                    0 | c[(b + 1092) >> 2],
                    4,
                    0 | c[(108 + (0 | c[e >> 2])) >> 2]
                  ),
                  tb(
                    0 | c[(b + 1096) >> 2],
                    4,
                    0 | c[(112 + (0 | c[e >> 2])) >> 2]
                  ),
                  tb(
                    0 | c[(b + 1100) >> 2],
                    4,
                    0 | c[(112 + (0 | c[e >> 2])) >> 2]
                  ),
                  tb(
                    0 | c[(b + 1104) >> 2],
                    4,
                    0 | c[(112 + (0 | c[e >> 2])) >> 2]
                  ),
                  tb(
                    0 | c[(b + 1108) >> 2],
                    4,
                    0 | c[(116 + (0 | c[e >> 2])) >> 2]
                  ),
                  tb(
                    0 | c[(b + 1112) >> 2],
                    4,
                    0 | c[(120 + (0 | c[e >> 2])) >> 2]
                  ),
                  tb(
                    0 | c[(b + 1116) >> 2],
                    4,
                    0 | c[(120 + (0 | c[e >> 2])) >> 2]
                  ),
                  tb(
                    0 | c[(b + 1120) >> 2],
                    4,
                    0 | c[(120 + (0 | c[e >> 2])) >> 2]
                  ),
                  tb(
                    0 | c[(b + 1124) >> 2],
                    4,
                    0 | c[(124 + (0 | c[e >> 2])) >> 2]
                  ),
                  tb(
                    0 | c[(b + 1128) >> 2],
                    4,
                    0 | c[(124 + (0 | c[e >> 2])) >> 2]
                  )))
          }
          function sa(d) {
            d |= 0
            var o,
              p,
              e = 0,
              g = 0,
              h = 0,
              i = 0,
              j = 0,
              k = 0,
              l = 0,
              m = 0,
              n = 0,
              q = 0,
              r = 0,
              s = 0,
              t = S,
              e = (S = (S + 63) & -64)
            if (
              ((S = (S + 32) | 0),
              (h = (e + 24) | 0),
              (c[(s = e) >> 2] = 4),
              (c[(s + 4) >> 2] = 2),
              (c[(s + 8) >> 2] = 4),
              !(function (a, b) {
                ;(a |= 0), (b |= 0)
                var d = 0,
                  e = 0
                ;(e = S = ((a = S) + 63) & -64),
                  (S = (S + 272) | 0),
                  (d = (16 + e) | 0),
                  (c[e >> 2] = b),
                  cc(d, 1393, e),
                  (function (a) {
                    a |= 0
                    var b = 0,
                      d = 0
                    ;(d = S = ((b = S) + 63) & -64),
                      (S = (S + 16) | 0),
                      (c[d >> 2] = a),
                      (function (a, b, d) {
                        ;(a |= 0),
                          (b |= 0),
                          (d |= 0),
                          (a = S = ((b = S) + 63) & -64),
                          (S = (S + 16) | 0),
                          (c[a >> 2] = d),
                          dc(496, 2934, a),
                          (S = b)
                      })(0, 0, d),
                      (S = b)
                  })(d),
                  (S = a)
              })(0, s),
              0 | yc(d))
            )
              return ia(0, 1433, (e + 16) | 0), (S = t), (s = 0) | s
            if (4 < (255 & (e = 0 | a[(g = (d + 4) | 0) >> 0])))
              return (
                (c[h >> 2] = 4),
                (c[(h + 4) >> 2] = 255 & e),
                ia(0, 1496, h),
                (S = t),
                (s = 0) | s
              )
            if (
              (0 | a[(e = (d + 5) | 0) >> 0]
                ? (sb(g, 1),
                  tb((d + 64) | 0, 4, 160),
                  pa(d, (s = (d + 704) | (a[e >> 0] = 0))),
                  ra(d))
                : pa(d, (s = (d + 704) | 0)),
              0 | c[1009] || (c[1009] = 1),
              (e = 0 | c[s >> 2]),
              (r = 0 | c[(e + 16) >> 2]),
              (n = ((g = 0 | c[(d + 912) >> 2]) + (r << 2)) | 0),
              0 < (0 | r))
            ) {
              for (l = (d + 1144) | 0, m = 0 | c[(d + 908) >> 2]; ; ) {
                ;(k = ((0 | c[l >> 2]) + (c[m >> 2] << 2)) | 0),
                  (h = ((e = 0 | c[g >> 2]) + -1) | 0)
                a: do {
                  if (1 < (0 | e))
                    for (i = 0, j = h; ; ) {
                      for (;;) {
                        if ((0 | c[(h = (k + (i << 2)) | 0) >> 2]) < 0) break
                        if (!((0 | (h = (i + 1) | 0)) < (0 | j))) {
                          h = j
                          break a
                        }
                        i = h
                      }
                      if (
                        (_c(0 | h, (h + 4) | 0, (((e - i) << 2) - 4) | 0),
                        !((0 | i) < (0 | (h = (j + -1) | 0))))
                      ) {
                        e = j
                        break
                      }
                      ;(e = j), (j = h)
                    }
                } while (0)
                if (
                  (0 < (0 | e) &&
                    (e = (0 | c[(k + (h << 2)) >> 2]) < 0 ? h : e),
                  (c[g >> 2] = e),
                  n >>> 0 <= (g = (g + 4) | 0) >>> 0)
                )
                  break
                m = (m + 4) | 0
              }
              e = 0 | c[s >> 2]
            }
            if (0 < (0 | c[e >> 2]))
              for (
                g = (d + 716) | 0, h = (d + 712) | 0, i = 0;
                (c[((0 | c[h >> 2]) + (i << 2)) >> 2] =
                  (0 | c[g >> 2]) + (i << 6)),
                  (e = 0 | c[s >> 2]),
                  (0 | (i = (i + 1) | 0)) < (0 | c[e >> 2]);

              );
            if (0 < (0 | c[(e + 4) >> 2]))
              for (
                g = (d + 748) | 0, h = (d + 744) | 0, i = 0;
                (c[((0 | c[h >> 2]) + (i << 2)) >> 2] =
                  (0 | c[g >> 2]) + (i << 6)),
                  (e = 0 | c[s >> 2]),
                  (0 | (i = (i + 1) | 0)) < (0 | c[(e + 4) >> 2]);

              );
            if (0 < (0 | c[(e + 16) >> 2]))
              for (
                j = (d + 848) | 0,
                  k = (d + 832) | 0,
                  q = (d + 1136) | 0,
                  o = (d + 896) | 0,
                  p = (d + 836) | 0,
                  l = (d + 1140) | 0,
                  m = (d + 900) | 0,
                  n = (d + 840) | 0,
                  g = (d + 1144) | 0,
                  h = (d + 908) | 0,
                  i = (d + 844) | 0,
                  r = 0;
                (c[((0 | c[k >> 2]) + (r << 2)) >> 2] =
                  (0 | c[j >> 2]) + (r << 6)),
                  (c[((0 | c[p >> 2]) + (r << 2)) >> 2] =
                    (0 | c[q >> 2]) +
                    (c[((0 | c[o >> 2]) + (r << 2)) >> 2] << 2)),
                  (c[((0 | c[n >> 2]) + (r << 2)) >> 2] =
                    (0 | c[l >> 2]) +
                    (c[((0 | c[m >> 2]) + (r << 2)) >> 2] << 1)),
                  (c[((0 | c[i >> 2]) + (r << 2)) >> 2] =
                    (0 | c[g >> 2]) +
                    (c[((0 | c[h >> 2]) + (r << 2)) >> 2] << 2)),
                  (e = 0 | c[s >> 2]),
                  (0 | (r = (r + 1) | 0)) < (0 | c[(e + 16) >> 2]);

              );
            if (0 < (0 | c[(e + 20) >> 2]))
              for (
                g = (d + 920) | 0, h = (d + 916) | 0, i = 0;
                (c[((0 | c[h >> 2]) + (i << 2)) >> 2] =
                  (0 | c[g >> 2]) + (i << 6)),
                  (e = 0 | c[s >> 2]),
                  (0 | (i = (i + 1) | 0)) < (0 | c[(e + 20) >> 2]);

              );
            if (0 < (0 | c[(e + 80) >> 2]))
              for (
                g = (d + 1184) | 0, h = (d + 1180) | 0, i = 0;
                (c[((0 | c[h >> 2]) + (i << 2)) >> 2] =
                  (0 | c[g >> 2]) + (i << 6)),
                  (e = 0 | c[s >> 2]),
                  (0 | (i = (i + 1) | 0)) < (0 | c[(e + 80) >> 2]);

              );
            if (1 & a[(20 + (0 | c[(d + 708) >> 2])) >> 0])
              return (S = t), 0 | (s = d)
            if ((0 | (m = 0 | c[(e + 16) >> 2])) <= 0)
              return (S = t), 0 | (s = d)
            ;(e = 0 | c[(d + 1140) >> 2]),
              (g = 0 | c[(d + 900) >> 2]),
              (h = 0 | c[(d + 904) >> 2]),
              (j = 0)
            do {
              if (
                ((i = (e + (c[(g + (j << 2)) >> 2] << 1)) | 0),
                (l = ((s = 0 | c[(h + (j << 2)) >> 2]) + -1) | 0),
                1 < (0 | s))
              )
                for (
                  k = 0;
                  (r = 0 | b[(q = (i + (k << 1)) | 0) >> 1]),
                    (b[q >> 1] = 0 | b[(s = (i + ((k + 2) << 1)) | 0) >> 1]),
                    (b[s >> 1] = r),
                    (0 | (k = (k + 3) | 0)) < (0 | l);

                );
            } while ((0 | (j = (j + 1) | 0)) != (0 | m))
            ;(g = 0 | c[(d + 1136) >> 2]),
              (h = 0 | c[(d + 896) >> 2]),
              (i = 0 | c[(d + 892) >> 2]),
              (k = 0)
            do {
              if (
                ((j =
                  ((e = (g + (c[(h + (k << 2)) >> 2] << 2)) | 0) +
                    (((s = 0 | c[(i + (k << 2)) >> 2]) << 1) << 2)) |
                  0),
                0 < (0 | s))
              )
                for (
                  e = (e + 4) | 0;
                  (f[e >> 2] = 1 - +f[e >> 2]),
                    (e = (e + 8) | 0) >>> 0 < j >>> 0;

                );
            } while ((0 | (k = (k + 1) | 0)) != (0 | m))
            return (S = t), 0 | d
          }
          function ta(a) {
            var c = 0,
              b = S,
              c = (S = (S + 63) & -64)
            return (
              (S = (S + 16) | 0),
              0 | yc((a |= 0))
                ? (ia(0, 1605, c), (S = b), (c = 0) | c)
                : ((c = 0 | d[(a + 4) >> 0]), (S = b), 0 | c)
            )
          }
          function va(a) {
            var j,
              k,
              l,
              m,
              b = 0,
              e = 0,
              f = 0,
              g = 0,
              h = 0,
              i = 0,
              e = ((a |= 0) + 64) | 0,
              b = (a + 144) | 0
            if (
              (za(
                e,
                0 | c[(a + 88) >> 2],
                0 | c[(a + 148) >> 2],
                0 | c[b >> 2]
              ),
              Ba(
                e,
                0 | c[(a + 92) >> 2],
                0 | c[(a + 152) >> 2],
                0 | c[(796 + (0 | c[a >> 2])) >> 2],
                2,
                0 | c[b >> 2]
              ),
              !(
                (0 | d[(4 + (0 | c[a >> 2])) >> 0]) < 4 ||
                (za(
                  e,
                  0 | c[(a + 96) >> 2],
                  0 | c[(m = (a + 120) | 0) >> 2],
                  0 | c[b >> 2]
                ),
                za(
                  e,
                  0 | c[(a + 100) >> 2],
                  0 | c[(f = (a + 124) | 0) >> 2],
                  0 | c[b >> 2]
                ),
                za(
                  e,
                  0 | c[(a + 104) >> 2],
                  0 | c[(g = (a + 128) | 0) >> 2],
                  0 | c[b >> 2]
                ),
                za(
                  e,
                  0 | c[(a + 108) >> 2],
                  0 | c[(j = (a + 132) | 0) >> 2],
                  0 | c[b >> 2]
                ),
                za(
                  e,
                  0 | c[(a + 112) >> 2],
                  0 | c[(k = (a + 136) | 0) >> 2],
                  0 | c[b >> 2]
                ),
                za(
                  e,
                  0 | c[(a + 116) >> 2],
                  0 | c[(l = (a + 140) | 0) >> 2],
                  0 | c[b >> 2]
                ),
                (b = 0 | c[(a + 156) >> 2]),
                (e = 0 | c[m >> 2]),
                (f = 0 | c[f >> 2]),
                (g = 0 | c[g >> 2]),
                (0 | (m = 0 | c[(a + 56) >> 2])) <= 0)
              ))
            ) {
              for (i = h = 0; ; ) {
                if (
                  ((c[(b + (h << 2)) >> 2] = c[(e + (i << 2)) >> 2]),
                  (c[(b + ((1 | h) << 2)) >> 2] = c[(f + (i << 2)) >> 2]),
                  (c[(b + ((2 | h) << 2)) >> 2] = c[(g + (i << 2)) >> 2]),
                  (0 | (i = (i + 1) | 0)) == (0 | m))
                )
                  break
                h = (h + 4) | 0
              }
              for (
                i = 0 | c[(a + 160) >> 2],
                  h = 0 | c[j >> 2],
                  g = 0 | c[k >> 2],
                  b = 0 | c[l >> 2],
                  f = e = 0;
                ;

              ) {
                if (
                  ((c[(i + (e << 2)) >> 2] = c[(h + (f << 2)) >> 2]),
                  (c[(i + ((1 | e) << 2)) >> 2] = c[(g + (f << 2)) >> 2]),
                  (c[(i + ((2 | e) << 2)) >> 2] = c[(b + (f << 2)) >> 2]),
                  (0 | (f = (f + 1) | 0)) == (0 | m))
                )
                  break
                e = (e + 4) | 0
              }
            }
          }
          function wa(a) {
            var j,
              k,
              l,
              m,
              b = 0,
              e = 0,
              f = 0,
              g = 0,
              h = 0,
              i = 0,
              e = ((a |= 0) + 172) | 0,
              b = (a + 264) | 0
            if (
              (za(
                e,
                0 | c[(a + 196) >> 2],
                0 | c[(a + 268) >> 2],
                0 | c[b >> 2]
              ),
              za(
                e,
                0 | c[(a + 200) >> 2],
                0 | c[(a + 284) >> 2],
                0 | c[b >> 2]
              ),
              za(
                e,
                0 | c[(a + 204) >> 2],
                0 | c[(a + 276) >> 2],
                0 | c[b >> 2]
              ),
              za(
                e,
                0 | c[(a + 208) >> 2],
                0 | c[(a + 280) >> 2],
                0 | c[b >> 2]
              ),
              za(
                e,
                0 | c[(a + 212) >> 2],
                0 | c[(a + 272) >> 2],
                0 | c[b >> 2]
              ),
              !(
                (0 | d[(4 + (0 | c[a >> 2])) >> 0]) < 4 ||
                (za(
                  e,
                  0 | c[(a + 216) >> 2],
                  0 | c[(m = (a + 240) | 0) >> 2],
                  0 | c[b >> 2]
                ),
                za(
                  e,
                  0 | c[(a + 220) >> 2],
                  0 | c[(f = (a + 244) | 0) >> 2],
                  0 | c[b >> 2]
                ),
                za(
                  e,
                  0 | c[(a + 224) >> 2],
                  0 | c[(g = (a + 248) | 0) >> 2],
                  0 | c[b >> 2]
                ),
                za(
                  e,
                  0 | c[(a + 228) >> 2],
                  0 | c[(j = (a + 252) | 0) >> 2],
                  0 | c[b >> 2]
                ),
                za(
                  e,
                  0 | c[(a + 232) >> 2],
                  0 | c[(k = (a + 256) | 0) >> 2],
                  0 | c[b >> 2]
                ),
                za(
                  e,
                  0 | c[(a + 236) >> 2],
                  0 | c[(l = (a + 260) | 0) >> 2],
                  0 | c[b >> 2]
                ),
                (b = 0 | c[(a + 296) >> 2]),
                (e = 0 | c[m >> 2]),
                (f = 0 | c[f >> 2]),
                (g = 0 | c[g >> 2]),
                (0 | (m = 0 | c[(a + 164) >> 2])) <= 0)
              ))
            ) {
              for (i = h = 0; ; ) {
                if (
                  ((c[(b + (h << 2)) >> 2] = c[(e + (i << 2)) >> 2]),
                  (c[(b + ((1 | h) << 2)) >> 2] = c[(f + (i << 2)) >> 2]),
                  (c[(b + ((2 | h) << 2)) >> 2] = c[(g + (i << 2)) >> 2]),
                  (0 | (i = (i + 1) | 0)) == (0 | m))
                )
                  break
                h = (h + 4) | 0
              }
              for (
                i = 0 | c[(a + 300) >> 2],
                  h = 0 | c[j >> 2],
                  g = 0 | c[k >> 2],
                  b = 0 | c[l >> 2],
                  f = e = 0;
                ;

              ) {
                if (
                  ((c[(i + (e << 2)) >> 2] = c[(h + (f << 2)) >> 2]),
                  (c[(i + ((1 | e) << 2)) >> 2] = c[(g + (f << 2)) >> 2]),
                  (c[(i + ((2 | e) << 2)) >> 2] = c[(b + (f << 2)) >> 2]),
                  (0 | (f = (f + 1) | 0)) == (0 | m))
                )
                  break
                e = (e + 4) | 0
              }
            }
          }
          function xa(a) {
            var j,
              k,
              l,
              m,
              b = 0,
              e = 0,
              f = 0,
              g = 0,
              h = 0,
              i = 0,
              e = ((a |= 0) + 340) | 0,
              b = (a + 424) | 0
            if (
              (za(
                e,
                0 | c[(a + 364) >> 2],
                0 | c[(a + 448) >> 2],
                0 | c[b >> 2]
              ),
              Aa(
                e,
                0 | c[(a + 368) >> 2],
                0 | c[(a + 440) >> 2],
                0 | c[b >> 2]
              ),
              Ba(
                e,
                0 | c[(a + 372) >> 2],
                0 | c[(a + 444) >> 2],
                0 | c[(892 + (0 | c[a >> 2])) >> 2],
                2,
                0 | c[b >> 2]
              ),
              !(
                (0 | d[(4 + (0 | c[a >> 2])) >> 0]) < 4 ||
                (za(
                  e,
                  0 | c[(a + 376) >> 2],
                  0 | c[(m = (a + 400) | 0) >> 2],
                  0 | c[b >> 2]
                ),
                za(
                  e,
                  0 | c[(a + 380) >> 2],
                  0 | c[(f = (a + 404) | 0) >> 2],
                  0 | c[b >> 2]
                ),
                za(
                  e,
                  0 | c[(a + 384) >> 2],
                  0 | c[(g = (a + 408) | 0) >> 2],
                  0 | c[b >> 2]
                ),
                za(
                  e,
                  0 | c[(a + 388) >> 2],
                  0 | c[(j = (a + 412) | 0) >> 2],
                  0 | c[b >> 2]
                ),
                za(
                  e,
                  0 | c[(a + 392) >> 2],
                  0 | c[(k = (a + 416) | 0) >> 2],
                  0 | c[b >> 2]
                ),
                za(
                  e,
                  0 | c[(a + 396) >> 2],
                  0 | c[(l = (a + 420) | 0) >> 2],
                  0 | c[b >> 2]
                ),
                (b = 0 | c[(a + 452) >> 2]),
                (e = 0 | c[m >> 2]),
                (f = 0 | c[f >> 2]),
                (g = 0 | c[g >> 2]),
                (0 | (m = 0 | c[(a + 332) >> 2])) <= 0)
              ))
            ) {
              for (i = h = 0; ; ) {
                if (
                  ((c[(b + (h << 2)) >> 2] = c[(e + (i << 2)) >> 2]),
                  (c[(b + ((1 | h) << 2)) >> 2] = c[(f + (i << 2)) >> 2]),
                  (c[(b + ((2 | h) << 2)) >> 2] = c[(g + (i << 2)) >> 2]),
                  (0 | (i = (i + 1) | 0)) == (0 | m))
                )
                  break
                h = (h + 4) | 0
              }
              for (
                i = 0 | c[(a + 456) >> 2],
                  h = 0 | c[j >> 2],
                  g = 0 | c[k >> 2],
                  b = 0 | c[l >> 2],
                  f = e = 0;
                ;

              ) {
                if (
                  ((c[(i + (e << 2)) >> 2] = c[(h + (f << 2)) >> 2]),
                  (c[(i + ((1 | e) << 2)) >> 2] = c[(g + (f << 2)) >> 2]),
                  (c[(i + ((2 | e) << 2)) >> 2] = c[(b + (f << 2)) >> 2]),
                  (0 | (f = (f + 1) | 0)) == (0 | m))
                )
                  break
                e = (e + 4) | 0
              }
            }
          }
          function za(a, b, d, e) {
            ;(b |= 0), (d |= 0), (e |= 0)
            var m,
              n,
              o,
              g = 0,
              h = 0,
              i = 0,
              j = 0,
              k = 0,
              l = 0
            if (0 < (0 | (g = 0 | c[((a |= 0) + 8) >> 2])))
              for (
                h = 0 | c[(a + 20) >> 2], i = 0 | c[(a + 12) >> 2], j = 0;
                (f[(i + (j << 2)) >> 2] =
                  +f[(b + (j << 2)) >> 2] * +f[(h + (j << 2)) >> 2]),
                  (0 | (j = (j + 1) | 0)) != (0 | g);

              );
            if (!((0 | (n = 0 | c[a >> 2])) <= 0))
              if (
                ((l = (a + 16) | 0),
                (o = 0 | c[(a + 4) >> 2]),
                (m = (a + 12) | 0),
                e)
              )
                for (b = j = 0; ; ) {
                  if (0 | c[e >> 2]) {
                    if (
                      ((h =
                        ((a = 0 | c[((0 | c[l >> 2]) + (b << 2)) >> 2]) + j) |
                        0),
                      0 < (0 | a))
                    )
                      for (
                        g = 0 | c[m >> 2], i = j, k = 0;
                        (k += +f[(g + (i << 2)) >> 2]),
                          (0 | (i = (i + 1) | 0)) < (0 | h);

                      );
                    else k = 0
                    f[(d + (b << 2)) >> 2] = k
                  }
                  if ((0 | (g = (b + 1) | 0)) == (0 | n)) break
                  ;(e = (e + 4) | 0),
                    (j = ((0 | c[(o + (b << 2)) >> 2]) + j) | 0),
                    (b = g)
                }
              else
                for (j = 0 | c[l >> 2], a = b = 0; ; ) {
                  if (
                    ((h = ((l = 0 | c[(j + (a << 2)) >> 2]) + b) | 0),
                    0 < (0 | l))
                  )
                    for (
                      g = 0 | c[m >> 2], i = b, k = 0;
                      (k += +f[(g + (i << 2)) >> 2]),
                        (0 | (i = (i + 1) | 0)) < (0 | h);

                    );
                  else k = 0
                  if (
                    ((f[(d + (a << 2)) >> 2] = k),
                    (0 | (g = (a + 1) | 0)) == (0 | n))
                  )
                    break
                  ;(b = ((0 | c[(o + (a << 2)) >> 2]) + b) | 0), (a = g)
                }
          }
          function Aa(a, b, d, e) {
            ;(b |= 0), (d |= 0), (e |= 0)
            var m,
              n,
              g = 0,
              h = 0,
              i = 0,
              j = 0,
              k = 0,
              l = 0
            if (0 < (0 | (g = 0 | c[((a |= 0) + 8) >> 2])))
              for (
                h = 0 | c[(a + 20) >> 2], i = 0 | c[(a + 12) >> 2], j = 0;
                (f[(i + (j << 2)) >> 2] =
                  +f[(b + (j << 2)) >> 2] * +f[(h + (j << 2)) >> 2]),
                  (0 | (j = (j + 1) | 0)) != (0 | g);

              );
            if (!((0 | (g = 0 | c[a >> 2])) <= 0))
              if (
                ((l = (a + 16) | 0),
                (m = 0 | c[(a + 4) >> 2]),
                (n = (a + 12) | 0),
                e)
              )
                for (b = j = 0; ; ) {
                  if (0 | c[e >> 2]) {
                    if (
                      ((h =
                        ((i = 0 | c[((0 | c[l >> 2]) + (b << 2)) >> 2]) + j) |
                        0),
                      0 < (0 | i))
                    )
                      for (
                        g = 0 | c[n >> 2], i = j, k = 0;
                        (k += +f[(g + (i << 2)) >> 2]),
                          (0 | (i = (i + 1) | 0)) < (0 | h);

                      );
                    else k = 0
                    ;(c[(d + (b << 2)) >> 2] = ~~(k + 0.0010000000474974513)),
                      (g = 0 | c[a >> 2])
                  }
                  if (!((0 | (h = (b + 1) | 0)) < (0 | g))) break
                  ;(e = (e + 4) | 0),
                    (j = ((0 | c[(m + (b << 2)) >> 2]) + j) | 0),
                    (b = h)
                }
              else
                for (j = 0 | c[l >> 2], e = b = 0; ; ) {
                  if (
                    ((h = ((l = 0 | c[(j + (e << 2)) >> 2]) + b) | 0),
                    0 < (0 | l))
                  )
                    for (
                      g = 0 | c[n >> 2], i = b, k = 0;
                      (k += +f[(g + (i << 2)) >> 2]),
                        (0 | (i = (i + 1) | 0)) < (0 | h);

                    );
                  else k = 0
                  if (
                    ((c[(d + (e << 2)) >> 2] = ~~(k + 0.0010000000474974513)),
                    !((0 | (g = (e + 1) | 0)) < (0 | c[a >> 2])))
                  )
                    break
                  ;(b = ((0 | c[(m + (e << 2)) >> 2]) + b) | 0), (e = g)
                }
          }
          function Ba(a, b, d, e, g, h) {
            ;(b |= 0), (d |= 0), (e |= 0), (g |= 0), (h |= 0)
            var r,
              s,
              u,
              w,
              x,
              i = 0,
              j = 0,
              k = 0,
              l = 0,
              m = 0,
              n = 0,
              o = 0,
              p = 0,
              q = 0,
              t = 0 | c[(a |= 0) >> 2]
            if (!((0 | t) <= 0))
              if (
                ((w = (a + 16) | 0),
                (u = 0 | c[(a + 4) >> 2]),
                (s = (a + 20) | 0),
                (r = g << 2),
                h)
              )
                for (p = o = 0; ; ) {
                  if (
                    0 | c[h >> 2] &&
                    ((l = 0 | c[(d + (p << 2)) >> 2]),
                    (a = 0 | c[(e + (p << 2)) >> 2]),
                    (n = 0 | v(a, g)),
                    (m =
                      ((i = 0 | c[((0 | c[w >> 2]) + (p << 2)) >> 2]) + o) | 0),
                    (k = 0 < (0 | n)) && $c(0 | l, 0, 0 | v(r, a)),
                    0 < (0 | i) && ((q = 0 | c[s >> 2]), k))
                  ) {
                    i = o
                    do {
                      for (
                        a = 0 | c[(b + (i << 2)) >> 2],
                          j = +f[(q + (i << 2)) >> 2],
                          k = 0;
                        (f[(x = (l + (k << 2)) | 0) >> 2] =
                          +f[x >> 2] + j * +f[(a + (k << 2)) >> 2]),
                          (0 | (k = (k + 1) | 0)) != (0 | n);

                      );
                    } while ((0 | (i = (i + 1) | 0)) < (0 | m))
                  }
                  if ((0 | (a = (p + 1) | 0)) == (0 | t)) break
                  ;(h = (h + 4) | 0),
                    (o = ((0 | c[(u + (p << 2)) >> 2]) + o) | 0),
                    (p = a)
                }
              else
                for (o = n = 0; ; ) {
                  if (
                    ((k = 0 | c[(d + (o << 2)) >> 2]),
                    (a = 0 | c[(e + (o << 2)) >> 2]),
                    (m = 0 | v(a, g)),
                    (l =
                      ((h = 0 | c[((0 | c[w >> 2]) + (o << 2)) >> 2]) + n) | 0),
                    (i = 0 < (0 | m)) && $c(0 | k, 0, 0 | v(r, a)),
                    0 < (0 | h) && ((p = 0 | c[s >> 2]), i))
                  ) {
                    h = n
                    do {
                      for (
                        a = 0 | c[(b + (h << 2)) >> 2],
                          j = +f[(p + (h << 2)) >> 2],
                          i = 0;
                        (f[(q = (k + (i << 2)) | 0) >> 2] =
                          +f[q >> 2] + j * +f[(a + (i << 2)) >> 2]),
                          (0 | (i = (i + 1) | 0)) != (0 | m);

                      );
                    } while ((0 | (h = (h + 1) | 0)) < (0 | l))
                  }
                  if ((0 | (a = (o + 1) | 0)) == (0 | t)) break
                  ;(n = ((0 | c[(u + (o << 2)) >> 2]) + n) | 0), (o = a)
                }
          }
          function Ka(a) {
            var b = 0,
              d = S,
              b = (S = (S + 63) & -64)
            return (
              (S = (S + 16) | 0),
              (a |= 0)
                ? ((b =
                    0 |
                    (function (a) {
                      a |= 0
                      var b = 0,
                        d = 0,
                        e = 0
                      return (
                        (S = ((d = S) + 560) | 0),
                        (b = ((e = d) + 548) | 0),
                        $c(0 | e, 0, 548),
                        ma(a, e, b),
                        (S = d),
                        0 | c[b >> 2]
                      )
                    })(a)),
                  (S = d),
                  0 | b)
                : ((c[b >> 2] = 1931),
                  (c[(b + 4) >> 2] = 1949),
                  ia(0, 1664, b),
                  (S = d),
                  (b = 0) | b)
            )
          }
          function La(a, b, d) {
            ;(b |= 0), (d |= 0)
            var g,
              f = 0,
              h = 0,
              i = S,
              e = (S = (S + 63) & -64)
            return (
              (S = (S + 32) | 0),
              (h = (24 + e) | 0),
              (g = (16 + e) | 0),
              (f = (8 + e) | 0),
              (a |= 0)
                ? b
                  ? ((((f = b) + 15) & -16) | 0) != (0 | f)
                    ? ((c[g >> 2] = 1967),
                      (c[(4 + g) >> 2] = 1738),
                      ia(0, 1664, g),
                      (S = i),
                      (h = 0) | h)
                    : (b = 0 | na(a, b, d))
                    ? ((S = i), 0 | (h = b))
                    : ((c[h >> 2] = 1967),
                      (c[(h + 4) >> 2] = 1993),
                      ia(0, 1664, h),
                      (S = i),
                      (h = 0) | h)
                  : ((c[f >> 2] = 1967),
                    (c[(f + 4) >> 2] = 1698),
                    ia(0, 1664, f),
                    (S = i),
                    (h = 0) | h)
                : ((c[e >> 2] = 1967),
                  (c[(4 + e) >> 2] = 1949),
                  ia(0, 1664, e),
                  (S = i),
                  (h = 0) | h)
            )
          }
          function rb(a, b, c, d) {
            if (
              ((c = +c),
              (d = +d),
              (b = +u(+(b = +b), +(a = +a)) - +u(+d, +c)) < -3.1415927410125732)
            )
              for (; (b += 6.2831854820251465) < -3.1415927410125732; );
            if (!(3.1415927410125732 < b)) return +(c = b)
            for (; 3.1415927410125732 < (b += -6.2831854820251465); );
            return +b
          }
          function sb(b, c) {
            ;(b |= 0), (c |= 0)
            var d
            if (!((c = (b + c + -1) | 0) >>> 0 <= b >>> 0))
              for (
                ;
                (d = 0 | a[b >> 0]),
                  (a[b >> 0] = 0 | a[c >> 0]),
                  (b = (b + 1) | 0),
                  (a[c >> 0] = d),
                  b >>> 0 < (c = (c + -1) | 0) >>> 0;

              );
          }
          function tb(b, c, d) {
            ;(b |= 0), (c |= 0)
            var g,
              e = 0,
              f = 0
            if ((d |= 0))
              do {
                if (
                  ((d = (d + -1) | 0),
                  (f = b) >>> 0 < (e = ((b = (b + c) | 0) + -1) | 0) >>> 0)
                )
                  for (
                    ;
                    (g = 0 | a[f >> 0]),
                      (a[f >> 0] = 0 | a[e >> 0]),
                      (f = (f + 1) | 0),
                      (a[e >> 0] = g),
                      f >>> 0 < (e = (e + -1) | 0) >>> 0;

                  );
              } while (0 != (0 | d))
          }
          function Ab(a) {
            var s,
              l,
              o,
              b = 0,
              e = 0,
              g = 0,
              h = 0,
              i = 0,
              j = 0,
              k = 0,
              n = 0,
              p = 0,
              q = 0,
              r = 0,
              t = 0,
              u = 0,
              v = 0,
              m =
                ((b = 0 | c[(l = ((a |= 0) + 336) | 0) >> 2]) +
                  ((20 * (n = 0 | c[(o = (a + 332) | 0) >> 2])) | 0)) |
                0,
              p = (a + 424) | 0,
              i = 0 | c[(a + 48) >> 2],
              j = 0 | c[(a + 316) >> 2],
              k = 0 | c[(a + 308) >> 2]
            if (0 < (0 | n))
              for (
                n = 0 | c[p >> 2],
                  g = 0 | c[(a + 448) >> 2],
                  h = 0 | c[(a + 444) >> 2];
                ;

              ) {
                if (
                  (0 | c[n >> 2] &&
                    (-1 != (0 | (e = 0 | c[(b + 4) >> 2])) &&
                      (f[g >> 2] = +f[(i + (e << 2)) >> 2] * +f[g >> 2]),
                    -1 != (0 | (e = 0 | c[(b + 8) >> 2])) &&
                      ((f[g >> 2] = +f[(j + (e << 2)) >> 2] * +f[g >> 2]),
                      (r = 0 | c[h >> 2]),
                      $[3 & c[(k + (e << 5) + 24) >> 2]](
                        a,
                        e,
                        r,
                        r,
                        0 | c[(b + 16) >> 2]
                      ))),
                  m >>> 0 <= (b = (b + 20) | 0) >>> 0)
                )
                  break
                ;(n = (n + 4) | 0), (g = (g + 4) | 0), (h = (h + 4) | 0)
              }
            if (
              !(
                (0 | d[(4 + (0 | c[a >> 2])) >> 0]) < 4 ||
                ((k =
                  ((b = 0 | c[l >> 2]) + ((20 * (r = 0 | c[o >> 2])) | 0)) | 0),
                (i = 0 | c[(a + 324) >> 2]),
                (j = 0 | c[(a + 328) >> 2]),
                (0 | r) <= 0)
              )
            )
              for (
                h = 0 | c[p >> 2],
                  e = b,
                  g = 0 | c[(a + 452) >> 2],
                  b = 0 | c[(a + 456) >> 2];
                ;

              ) {
                if (
                  (0 | c[h >> 2] &&
                    -1 != (0 | (q = 0 | c[(e + 8) >> 2])) &&
                    ((t =
                      +f[g >> 2] *
                      +f[(o = (i + ((p = q << 2) << 2)) | 0) >> 2]),
                    (f[g >> 2] = t),
                    (u = +f[(r = (g + 4) | 0) >> 2] * +f[(4 + o) >> 2]),
                    (f[r >> 2] = u),
                    (v = +f[(a = (g + 8) | 0) >> 2] * +f[(8 + o) >> 2]),
                    (f[g >> 2] = t < 0 ? 0 : 1 < t ? 1 : t),
                    (f[r >> 2] = u < 0 ? 0 : 1 < u ? 1 : u),
                    (f[a >> 2] = v < 0 ? 0 : 1 < v ? 1 : v),
                    (f[(g + 12) >> 2] = 1),
                    (v = +f[b >> 2]),
                    (u = +f[(p = (j + (p << 2)) | 0) >> 2]),
                    (f[b >> 2] = u = v + u - v * u),
                    (v = +f[(a = (b + 4) | 0) >> 2]),
                    (t = +f[(p + 4) >> 2]),
                    (f[a >> 2] = t = v + t - v * t),
                    (s =
                      (v = +f[(r = (b + 8) | 0) >> 2]) +
                      (s = +f[(p + 8) >> 2]) -
                      v * s),
                    (f[b >> 2] = u < 0 ? 0 : 1 < u ? 1 : u),
                    (f[a >> 2] = t < 0 ? 0 : 1 < t ? 1 : t),
                    (f[r >> 2] = s < 0 ? 0 : 1 < s ? 1 : s),
                    (f[(b + 12) >> 2] = 1)),
                  k >>> 0 <= (e = (e + 20) | 0) >>> 0)
                )
                  break
                ;(h = (h + 4) | 0), (g = (g + 16) | 0), (b = (b + 16) | 0)
              }
          }
          function Bb(a) {
            var e,
              b = 0 | c[((a |= 0) + 332) >> 2]
            0 | c[(a + 428) >> 2] &&
              (Zc(
                0 | c[(a + 460) >> 2],
                0 | c[(a + 436) >> 2],
                0 | (e = b << 2)
              ),
              Zc(0 | c[(a + 464) >> 2], 0 | c[(a + 440) >> 2], 0 | e),
              Zc(0 | c[(a + 468) >> 2], 0 | c[(a + 448) >> 2], 0 | e),
              (0 | d[(4 + (0 | c[a >> 2])) >> 0]) <= 3 ||
                (Zc(
                  0 | c[(a + 472) >> 2],
                  0 | c[(a + 452) >> 2],
                  0 | (e = b << 4)
                ),
                Zc(0 | c[(a + 476) >> 2], 0 | c[(a + 456) >> 2], 0 | e)))
          }
          function Cb(b) {
            var j,
              k,
              m,
              n,
              o,
              p,
              q,
              r,
              s,
              t,
              y,
              d = 0,
              e = 0,
              g = 0,
              h = 0,
              i = 0,
              l = 0,
              u = 0,
              v = 0,
              x = 0,
              e = 0 | a[(4 + (0 | c[(b |= 0) >> 2])) >> 0],
              w = 0 | c[(b + 332) >> 2],
              d = (b + 428) | 0
            if (0 | c[(b + 620) >> 2]) {
              if (!(((c[d >> 2] = 0) | w) <= 0))
                for (
                  h = (b + 424) | 0,
                    i = (b + 432) | 0,
                    d = (b + 448) | 0,
                    e = 0;
                  (g =
                    0 != (0 | c[((0 | c[h >> 2]) + (e << 2)) >> 2]) &&
                    0 != +f[((0 | c[d >> 2]) + (e << 2)) >> 2]
                      ? 127
                      : 126),
                    (a[((0 | c[i >> 2]) + e) >> 0] = g),
                    (0 | (e = (e + 1) | 0)) != (0 | w);

                );
            } else if (0 | c[d >> 2]) {
              if (!(((c[d >> 2] = 0) | w) <= 0))
                if (
                  ((m = (b + 424) | 0),
                  (p = (b + 432) | 0),
                  (o = (b + 448) | 0),
                  (r = (b + 468) | 0),
                  (n = (b + 440) | 0),
                  (q = (b + 464) | 0),
                  (t = (b + 436) | 0),
                  (s = (b + 460) | 0),
                  (j = (b + 452) | 0),
                  (l = (b + 472) | 0),
                  (k = (b + 456) | 0),
                  (i = (b + 476) | 0),
                  (255 & e) <= 3)
                )
                  for (
                    d = 0;
                    (l = 0 == (0 | c[((0 | c[m >> 2]) + (d << 2)) >> 2])),
                      (x = +f[((0 | c[o >> 2]) + (d << 2)) >> 2]),
                      (v = ((0 | c[p >> 2]) + d) | 0),
                      (u =
                        (1 & a[v >> 0]) ==
                        ((u = (0 != x) & (1 ^ l) & 1) << 24) >> 24
                          ? u
                          : 2 | u),
                      (u =
                        x != +f[((0 | c[r >> 2]) + (d << 2)) >> 2] ? 4 | u : u),
                      (u =
                        (0 | c[((0 | c[n >> 2]) + (d << 2)) >> 2]) ==
                        (0 | c[((0 | c[q >> 2]) + (d << 2)) >> 2])
                          ? u
                          : 8 | u),
                      (u =
                        (0 | c[((0 | c[t >> 2]) + (d << 2)) >> 2]) ==
                        (0 | c[((0 | c[s >> 2]) + (d << 2)) >> 2])
                          ? u
                          : 16 | u),
                      (a[v >> 0] = l ? u : 32 | u),
                      (0 | (d = (d + 1) | 0)) != (0 | w);

                  );
                else
                  for (h = g = 0; ; ) {
                    if (
                      ((y = 0 == (0 | c[((0 | c[m >> 2]) + (g << 2)) >> 2])),
                      (x = +f[((0 | c[o >> 2]) + (g << 2)) >> 2]),
                      (e = ((0 | c[p >> 2]) + g) | 0),
                      (d =
                        (1 & a[e >> 0]) ==
                        ((d = (0 != x) & (1 ^ y) & 1) << 24) >> 24
                          ? d
                          : 2 | d),
                      (d =
                        x != +f[((0 | c[r >> 2]) + (g << 2)) >> 2] ? 4 | d : d),
                      (d =
                        (0 | c[((0 | c[n >> 2]) + (g << 2)) >> 2]) ==
                        (0 | c[((0 | c[q >> 2]) + (g << 2)) >> 2])
                          ? d
                          : 8 | d),
                      (d =
                        (0 | c[((0 | c[t >> 2]) + (g << 2)) >> 2]) ==
                        (0 | c[((0 | c[s >> 2]) + (g << 2)) >> 2])
                          ? d
                          : 16 | d),
                      (d = y ? d : 32 | d),
                      (y = ((0 | c[j >> 2]) + (h << 2)) | 0),
                      (b = ((0 | c[l >> 2]) + (h << 2)) | 0),
                      (+f[y >> 2] == +f[b >> 2] &&
                        +f[(4 + y) >> 2] == +f[(b + 4) >> 2] &&
                        +f[(8 + y) >> 2] == +f[(b + 8) >> 2] &&
                        +f[(12 + y) >> 2] == +f[(b + 12) >> 2] &&
                        ((u = ((0 | c[k >> 2]) + (h << 2)) | 0),
                        (v = ((0 | c[i >> 2]) + (h << 2)) | 0),
                        +f[u >> 2] == +f[v >> 2]) &&
                        +f[(u + 4) >> 2] == +f[(v + 4) >> 2] &&
                        +f[(u + 8) >> 2] == +f[(v + 8) >> 2] &&
                        +f[(u + 12) >> 2] == +f[(v + 12) >> 2]) ||
                        (d |= 64),
                      (a[e >> 0] = d),
                      (0 | (g = (g + 1) | 0)) == (0 | w))
                    )
                      break
                    h = (h + 4) | 0
                  }
            } else if (!((0 | w) <= 0))
              for (
                g = (b + 424) | 0, h = (b + 432) | 0, d = (b + 448) | 0, e = 0;
                0 != (0 | c[((0 | c[g >> 2]) + (e << 2)) >> 2]) &&
                0 != +f[((0 | c[d >> 2]) + (e << 2)) >> 2]
                  ? ((v = ((0 | c[h >> 2]) + e) | 0),
                    (a[v >> 0] = 1 | a[v >> 0]))
                  : ((v = ((0 | c[h >> 2]) + e) | 0),
                    (a[v >> 0] = -2 & a[v >> 0])),
                  (0 | (e = (e + 1) | 0)) != (0 | w);

              );
          }
          function Eb(a) {
            var C,
              D,
              E,
              F,
              G,
              A,
              B,
              b = 0,
              e = 0,
              f = 0,
              g = 0,
              h = 0,
              i = 0,
              j = 0,
              k = 0,
              l = 0,
              m = 0,
              n = 0,
              o = 0,
              p = 0,
              q = 0,
              r = 0,
              s = 0,
              t = 0,
              u = 0,
              v = 0,
              w = 0,
              x = 0,
              y = 0,
              z = 0,
              H = 0,
              I = 0,
              J = 0,
              K = 0,
              k = 0 | c[(A = ((a |= 0) + 60) | 0) >> 2],
              b = 0 | c[a >> 2],
              l = 0 | c[(b + 784) >> 2],
              m = 0 | c[(B = (a + 56) | 0) >> 2],
              n = 0 | c[(b + 1028) >> 2]
            if (0 < (0 | m)) {
              for (
                s = (a + 80) | 0,
                  v = (a + 92) | 0,
                  u = (a + 88) | 0,
                  w = (a + 84) | 0,
                  t = (b + 984) | 0,
                  h = (b + 980) | 0,
                  j = i = 0;
                ;

              ) {
                if (
                  ((g = 0 | c[(k + ((24 * i) | 0)) >> 2]),
                  15 ==
                    (0 |
                      (z =
                        0 != (0 | c[(b = (g + 24) | 0) >> 2]) ||
                        0 | c[(g + 28) >> 2]
                          ? 15
                          : z)) &&
                    ((c[(((z = 0) | c[s >> 2]) + (i << 2)) >> 2] =
                      c[(r = (g + 12) | 0) >> 2]),
                    0 | c[b >> 2]) &&
                    ((o = 0 | c[(l + (i << 2)) >> 2]),
                    (x =
                      ((p = 0 | c[(g + 16) >> 2]) +
                        ((H = 0 | c[r >> 2]) << 2)) |
                      0),
                    0 < (0 | H)))
                )
                  for (
                    b = p,
                      e = ((0 | c[u >> 2]) + (j << 2)) | 0,
                      f = ((0 | c[v >> 2]) + (j << 2)) | 0;
                    ;

                  ) {
                    if (
                      ((H = ((0 | c[b >> 2]) + o) | 0),
                      (c[f >> 2] =
                        n + (c[((0 | c[t >> 2]) + (H << 2)) >> 2] << 2)),
                      (c[e >> 2] = c[((0 | c[h >> 2]) + (H << 2)) >> 2]),
                      x >>> 0 <= (b = (b + 4) | 0) >>> 0)
                    )
                      break
                    ;(e = (e + 4) | 0), (f = (f + 4) | 0)
                  }
                if (
                  0 | c[(g + 28) >> 2] &&
                  ((y =
                    ((q = 0 | c[(g + 20) >> 2]) +
                      ((H = 0 | c[(g + 12) >> 2]) << 2)) |
                    0),
                  0 < (0 | H))
                )
                  for (b = ((0 | c[w >> 2]) + (j << 2)) | 0, e = q; ; ) {
                    if (
                      ((c[b >> 2] = c[e >> 2]),
                      y >>> 0 <= (e = (e + 4) | 0) >>> 0)
                    )
                      break
                    b = (b + 4) | 0
                  }
                if ((0 | (i = (i + 1) | 0)) == (0 | m)) break
                j = ((0 | c[(g + 8) >> 2]) + j) | 0
              }
              b = 0 | c[a >> 2]
            }
            if (
              !(
                (0 | d[(b + 4) >> 0]) < 4 ||
                ((G = 0 | c[A >> 2]),
                (H = 0 | c[(b + 792) >> 2]),
                (0 | (A = 0 | c[B >> 2])) <= 0)
              )
            )
              for (
                D = (a + 96) | 0,
                  C = (a + 100) | 0,
                  B = (a + 104) | 0,
                  F = (a + 108) | 0,
                  E = (a + 112) | 0,
                  z = (a + 116) | 0,
                  x = (b + 1228) | 0,
                  v = (b + 1232) | 0,
                  u = (b + 1236) | 0,
                  y = (b + 1240) | 0,
                  w = (b + 1244) | 0,
                  k = (b + 1248) | 0,
                  m = l = 0;
                ;

              ) {
                if (
                  ((b = 0 | c[(G + ((24 * l) | 0)) >> 2]),
                  0 | c[(b + 24) >> 2] &&
                    ((I = 0 | c[(H + (l << 2)) >> 2]),
                    (K =
                      ((J = 0 | c[(b + 16) >> 2]) +
                        ((a = 0 | c[(b + 12) >> 2]) << 2)) |
                      0),
                    0 < (0 | a)))
                )
                  for (
                    e = 0 | c[x >> 2],
                      f = 0 | c[v >> 2],
                      g = 0 | c[u >> 2],
                      h = 0 | c[y >> 2],
                      i = 0 | c[w >> 2],
                      j = 0 | c[k >> 2],
                      n = J,
                      o = ((0 | c[B >> 2]) + (m << 2)) | 0,
                      p = ((0 | c[C >> 2]) + (m << 2)) | 0,
                      q = ((0 | c[D >> 2]) + (m << 2)) | 0,
                      r = ((0 | c[z >> 2]) + (m << 2)) | 0,
                      s = ((0 | c[E >> 2]) + (m << 2)) | 0,
                      t = ((0 | c[F >> 2]) + (m << 2)) | 0;
                    ;

                  ) {
                    if (
                      ((a = ((0 | c[n >> 2]) + I) | 0),
                      (c[q >> 2] = c[(e + (a << 2)) >> 2]),
                      (c[p >> 2] = c[(f + (a << 2)) >> 2]),
                      (c[o >> 2] = c[(g + (a << 2)) >> 2]),
                      (c[t >> 2] = c[(h + (a << 2)) >> 2]),
                      (c[s >> 2] = c[(i + (a << 2)) >> 2]),
                      (c[r >> 2] = c[(j + (a << 2)) >> 2]),
                      K >>> 0 <= (n = (n + 4) | 0) >>> 0)
                    )
                      break
                    ;(o = (o + 4) | 0),
                      (p = (p + 4) | 0),
                      (q = (q + 4) | 0),
                      (r = (r + 4) | 0),
                      (s = (s + 4) | 0),
                      (t = (t + 4) | 0)
                  }
                if ((0 | (l = (l + 1) | 0)) == (0 | A)) break
                m = ((0 | c[(b + 8) >> 2]) + m) | 0
              }
          }
          function Fb(a) {
            var H,
              I,
              J,
              K,
              L,
              Q,
              b = 0,
              e = 0,
              f = 0,
              g = 0,
              h = 0,
              i = 0,
              j = 0,
              k = 0,
              l = 0,
              m = 0,
              n = 0,
              o = 0,
              p = 0,
              q = 0,
              r = 0,
              s = 0,
              t = 0,
              u = 0,
              v = 0,
              w = 0,
              x = 0,
              y = 0,
              z = 0,
              A = 0,
              B = 0,
              C = 0,
              D = 0,
              E = 0,
              F = 0,
              G = 0,
              M = 0,
              N = 0,
              O = 0,
              P = 0,
              T = 0,
              U = 0,
              V = 0,
              W = 0,
              S = 0 | c[((a |= 0) + 168) >> 2],
              R = 0 | c[a >> 2],
              r = 0 | c[(816 + R) >> 2]
            if (0 < (0 | (s = 0 | c[(Q = (a + 164) | 0) >> 2])))
              for (
                A = (a + 188) | 0,
                  w = (a + 200) | 0,
                  E = (a + 204) | 0,
                  G = (a + 208) | 0,
                  K = (a + 212) | 0,
                  B = (a + 196) | 0,
                  L = (a + 192) | 0,
                  v = (992 + R) | 0,
                  D = (996 + R) | 0,
                  F = (1e3 + R) | 0,
                  J = (1004 + R) | 0,
                  C = (988 + R) | 0,
                  H = (1008 + R) | 0,
                  x = (a + 288) | 0,
                  I = (1012 + R) | 0,
                  y = (a + 292) | 0,
                  O = N = 0;
                ;

              ) {
                if (
                  ((t = 0 | c[(S + ((12 * N) | 0)) >> 2]),
                  14 ==
                    (0 |
                      (P =
                        0 != (0 | c[(b = (t + 24) | 0) >> 2]) ||
                        0 | c[(t + 28) >> 2]
                          ? 14
                          : P)) &&
                    ((c[(((P = 0) | c[A >> 2]) + (N << 2)) >> 2] =
                      c[(z = (t + 12) | 0) >> 2]),
                    0 | c[b >> 2]))
                ) {
                  if (
                    ((b = 0 | c[(r + (N << 2)) >> 2]),
                    (k =
                      ((e = 0 | c[(t + 16) >> 2]) +
                        ((q = 0 | c[z >> 2]) << 2)) |
                      0),
                    0 < (0 | q))
                  )
                    for (
                      f = 0 | c[v >> 2],
                        g = 0 | c[D >> 2],
                        h = 0 | c[F >> 2],
                        i = 0 | c[J >> 2],
                        j = 0 | c[C >> 2],
                        l = ((0 | c[w >> 2]) + (O << 2)) | 0,
                        m = e,
                        n = ((0 | c[B >> 2]) + (O << 2)) | 0,
                        o = ((0 | c[E >> 2]) + (O << 2)) | 0,
                        p = ((0 | c[G >> 2]) + (O << 2)) | 0,
                        q = ((0 | c[K >> 2]) + (O << 2)) | 0;
                      ;

                    ) {
                      if (
                        ((W = ((0 | c[m >> 2]) + b) | 0),
                        (c[l >> 2] = c[(f + (W << 2)) >> 2]),
                        (c[o >> 2] = c[(g + (W << 2)) >> 2]),
                        (c[p >> 2] = c[(h + (W << 2)) >> 2]),
                        (c[q >> 2] = c[(i + (W << 2)) >> 2]),
                        (c[n >> 2] = c[(j + (W << 2)) >> 2]),
                        k >>> 0 <= (m = (m + 4) | 0) >>> 0)
                      )
                        break
                      ;(l = (l + 4) | 0),
                        (n = (n + 4) | 0),
                        (o = (o + 4) | 0),
                        (p = (p + 4) | 0),
                        (q = (q + 4) | 0)
                    }
                  ;(W = ((0 | c[e >> 2]) + b) | 0),
                    (c[((0 | c[x >> 2]) + (N << 2)) >> 2] =
                      c[((0 | c[H >> 2]) + (W << 2)) >> 2]),
                    (c[((0 | c[y >> 2]) + (N << 2)) >> 2] =
                      c[((0 | c[I >> 2]) + (W << 2)) >> 2])
                }
                if (
                  0 | c[(t + 28) >> 2] &&
                  ((M =
                    ((u = 0 | c[(t + 20) >> 2]) +
                      ((W = 0 | c[(t + 12) >> 2]) << 2)) |
                    0),
                  0 < (0 | W))
                )
                  for (b = ((0 | c[L >> 2]) + (O << 2)) | 0, e = u; ; ) {
                    if (
                      ((c[b >> 2] = c[e >> 2]),
                      M >>> 0 <= (e = (e + 4) | 0) >>> 0)
                    )
                      break
                    b = (b + 4) | 0
                  }
                if ((0 | (N = (N + 1) | 0)) == (0 | s)) break
                O = ((0 | c[(t + 8) >> 2]) + O) | 0
              }
            if (
              !(
                (0 | d[(4 + R) >> 0]) < 4 ||
                ((G = 0 | c[(824 + R) >> 2]), (0 | (A = 0 | c[Q >> 2])) <= 0)
              )
            )
              for (
                D = (a + 216) | 0,
                  C = (a + 220) | 0,
                  B = (a + 224) | 0,
                  F = (a + 228) | 0,
                  E = (a + 232) | 0,
                  z = (a + 236) | 0,
                  x = (1228 + R) | 0,
                  v = (1232 + R) | 0,
                  u = (1236 + R) | 0,
                  y = (1240 + R) | 0,
                  w = (1244 + R) | 0,
                  k = (1248 + R) | 0,
                  m = l = 0;
                ;

              ) {
                if (
                  ((j = 0 | c[(S + ((12 * l) | 0)) >> 2]),
                  0 | c[(j + 24) >> 2] &&
                    ((U = 0 | c[(G + (l << 2)) >> 2]),
                    (V =
                      ((T = 0 | c[(j + 16) >> 2]) +
                        ((W = 0 | c[(j + 12) >> 2]) << 2)) |
                      0),
                    0 < (0 | W)))
                )
                  for (
                    b = 0 | c[x >> 2],
                      e = 0 | c[v >> 2],
                      f = 0 | c[u >> 2],
                      g = 0 | c[y >> 2],
                      h = 0 | c[w >> 2],
                      i = 0 | c[k >> 2],
                      n = T,
                      o = ((0 | c[B >> 2]) + (m << 2)) | 0,
                      p = ((0 | c[C >> 2]) + (m << 2)) | 0,
                      q = ((0 | c[D >> 2]) + (m << 2)) | 0,
                      r = ((0 | c[z >> 2]) + (m << 2)) | 0,
                      s = ((0 | c[E >> 2]) + (m << 2)) | 0,
                      t = ((0 | c[F >> 2]) + (m << 2)) | 0;
                    ;

                  ) {
                    if (
                      ((W = ((0 | c[n >> 2]) + U) | 0),
                      (c[q >> 2] = c[(b + (W << 2)) >> 2]),
                      (c[p >> 2] = c[(e + (W << 2)) >> 2]),
                      (c[o >> 2] = c[(f + (W << 2)) >> 2]),
                      (c[t >> 2] = c[(g + (W << 2)) >> 2]),
                      (c[s >> 2] = c[(h + (W << 2)) >> 2]),
                      (c[r >> 2] = c[(i + (W << 2)) >> 2]),
                      V >>> 0 <= (n = (n + 4) | 0) >>> 0)
                    )
                      break
                    ;(o = (o + 4) | 0),
                      (p = (p + 4) | 0),
                      (q = (q + 4) | 0),
                      (r = (r + 4) | 0),
                      (s = (s + 4) | 0),
                      (t = (t + 4) | 0)
                  }
                if ((0 | (l = (l + 1) | 0)) == (0 | A)) break
                m = ((0 | c[(j + 8) >> 2]) + m) | 0
              }
          }
          function Gb(a) {
            var F,
              G,
              D,
              E,
              b = 0,
              e = 0,
              f = 0,
              g = 0,
              h = 0,
              i = 0,
              j = 0,
              k = 0,
              l = 0,
              m = 0,
              n = 0,
              o = 0,
              p = 0,
              q = 0,
              r = 0,
              s = 0,
              t = 0,
              u = 0,
              v = 0,
              w = 0,
              x = 0,
              y = 0,
              z = 0,
              A = 0,
              B = 0,
              C = 0,
              H = 0,
              I = 0,
              J = 0,
              K = 0,
              l = 0 | c[(D = ((a |= 0) + 336) | 0) >> 2],
              b = 0 | c[a >> 2],
              m = 0 | c[(b + 856) >> 2],
              n = 0 | c[(E = (a + 332) | 0) >> 2],
              o = 0 | c[(b + 1028) >> 2]
            if (0 < (0 | n)) {
              for (
                t = (a + 356) | 0,
                  y = (a + 372) | 0,
                  w = (a + 364) | 0,
                  u = (a + 368) | 0,
                  z = (a + 360) | 0,
                  v = (b + 1024) | 0,
                  x = (b + 1016) | 0,
                  i = (b + 1020) | 0,
                  k = j = 0;
                ;

              ) {
                if (
                  ((h = 0 | c[(l + ((20 * j) | 0)) >> 2]),
                  15 ==
                    (0 |
                      (C =
                        0 != (0 | c[(b = (h + 24) | 0) >> 2]) ||
                        0 | c[(h + 28) >> 2]
                          ? 15
                          : C)) &&
                    ((c[(((C = 0) | c[t >> 2]) + (j << 2)) >> 2] =
                      c[(s = (h + 12) | 0) >> 2]),
                    0 | c[b >> 2]) &&
                    ((p = 0 | c[(m + (j << 2)) >> 2]),
                    (A =
                      ((q = 0 | c[(h + 16) >> 2]) +
                        ((H = 0 | c[s >> 2]) << 2)) |
                      0),
                    0 < (0 | H)))
                )
                  for (
                    b = ((0 | c[u >> 2]) + (k << 2)) | 0,
                      e = q,
                      f = ((0 | c[w >> 2]) + (k << 2)) | 0,
                      g = ((0 | c[y >> 2]) + (k << 2)) | 0;
                    ;

                  ) {
                    if (
                      ((H = ((0 | c[e >> 2]) + p) | 0),
                      (c[g >> 2] =
                        o + (c[((0 | c[v >> 2]) + (H << 2)) >> 2] << 2)),
                      (c[f >> 2] = c[((0 | c[x >> 2]) + (H << 2)) >> 2]),
                      (c[b >> 2] = c[((0 | c[i >> 2]) + (H << 2)) >> 2]),
                      A >>> 0 <= (e = (e + 4) | 0) >>> 0)
                    )
                      break
                    ;(b = (b + 4) | 0), (f = (f + 4) | 0), (g = (g + 4) | 0)
                  }
                if (
                  0 | c[(h + 28) >> 2] &&
                  ((B =
                    ((r = 0 | c[(h + 20) >> 2]) +
                      ((H = 0 | c[(h + 12) >> 2]) << 2)) |
                    0),
                  0 < (0 | H))
                )
                  for (b = ((0 | c[z >> 2]) + (k << 2)) | 0, e = r; ; ) {
                    if (
                      ((c[b >> 2] = c[e >> 2]),
                      B >>> 0 <= (e = (e + 4) | 0) >>> 0)
                    )
                      break
                    b = (b + 4) | 0
                  }
                if ((0 | (j = (j + 1) | 0)) == (0 | n)) break
                k = ((0 | c[(h + 8) >> 2]) + k) | 0
              }
              b = 0 | c[a >> 2]
            }
            if (
              !(
                (0 | d[(b + 4) >> 0]) < 4 ||
                ((G = 0 | c[D >> 2]),
                (H = 0 | c[(b + 864) >> 2]),
                (0 | (A = 0 | c[E >> 2])) <= 0)
              )
            )
              for (
                D = (a + 376) | 0,
                  C = (a + 380) | 0,
                  B = (a + 384) | 0,
                  F = (a + 388) | 0,
                  E = (a + 392) | 0,
                  z = (a + 396) | 0,
                  x = (b + 1228) | 0,
                  v = (b + 1232) | 0,
                  u = (b + 1236) | 0,
                  y = (b + 1240) | 0,
                  w = (b + 1244) | 0,
                  k = (b + 1248) | 0,
                  m = l = 0;
                ;

              ) {
                if (
                  ((b = 0 | c[(G + ((20 * l) | 0)) >> 2]),
                  0 | c[(b + 24) >> 2] &&
                    ((I = 0 | c[(H + (l << 2)) >> 2]),
                    (K =
                      ((J = 0 | c[(b + 16) >> 2]) +
                        ((a = 0 | c[(b + 12) >> 2]) << 2)) |
                      0),
                    0 < (0 | a)))
                )
                  for (
                    e = 0 | c[x >> 2],
                      f = 0 | c[v >> 2],
                      g = 0 | c[u >> 2],
                      h = 0 | c[y >> 2],
                      i = 0 | c[w >> 2],
                      j = 0 | c[k >> 2],
                      n = J,
                      o = ((0 | c[B >> 2]) + (m << 2)) | 0,
                      p = ((0 | c[C >> 2]) + (m << 2)) | 0,
                      q = ((0 | c[D >> 2]) + (m << 2)) | 0,
                      r = ((0 | c[z >> 2]) + (m << 2)) | 0,
                      s = ((0 | c[E >> 2]) + (m << 2)) | 0,
                      t = ((0 | c[F >> 2]) + (m << 2)) | 0;
                    ;

                  ) {
                    if (
                      ((a = ((0 | c[n >> 2]) + I) | 0),
                      (c[q >> 2] = c[(e + (a << 2)) >> 2]),
                      (c[p >> 2] = c[(f + (a << 2)) >> 2]),
                      (c[o >> 2] = c[(g + (a << 2)) >> 2]),
                      (c[t >> 2] = c[(h + (a << 2)) >> 2]),
                      (c[s >> 2] = c[(i + (a << 2)) >> 2]),
                      (c[r >> 2] = c[(j + (a << 2)) >> 2]),
                      K >>> 0 <= (n = (n + 4) | 0) >>> 0)
                    )
                      break
                    ;(o = (o + 4) | 0),
                      (p = (p + 4) | 0),
                      (q = (q + 4) | 0),
                      (r = (r + 4) | 0),
                      (s = (s + 4) | 0),
                      (t = (t + 4) | 0)
                  }
                if ((0 | (l = (l + 1) | 0)) == (0 | A)) break
                m = ((0 | c[(b + 8) >> 2]) + m) | 0
              }
          }
          function Jb(a) {
            var d,
              e,
              g,
              b = 0
            if (
              (Bb((a |= 0)),
              !(function (a) {
                a |= 0
                var b = 0,
                  d = 0,
                  e = 0,
                  g = 0,
                  h = 0,
                  i = 0,
                  j = 0,
                  k = 0
                if (
                  ((b = 0 | c[(a + 4) >> 2]),
                  (h = 0 | c[a >> 2]),
                  (i = (b + ((52 * h) | 0)) | 0),
                  !((0 | h) <= 0))
                )
                  for (h = 0 | c[(a + 12) >> 2]; ; ) {
                    if (
                      ((d = +f[h >> 2]),
                      (g = 0 == (0 | c[(b + 16) >> 2])),
                      (a = (b + 4) | 0),
                      (d = g
                        ? ((k = +f[a >> 2]),
                          (j = +f[(b + 8) >> 2]),
                          d < k ? k : j < d ? j : d)
                        : ((k = +f[(b + 12) >> 2]),
                          (j = +f[a >> 2]) +
                            k * ((d = (d - j) / k) - (0 | ~~+q(+d))))),
                      (a = (b + 48) | 0),
                      +f[(e = (b + 44) | 0) >> 2] != d
                        ? ((c[a >> 2] = 1), (f[e >> 2] = d))
                        : (c[a >> 2] = 0),
                      g && (f[h >> 2] = d),
                      i >>> 0 <= (b = (b + 52) | 0) >>> 0)
                    )
                      break
                    h = (h + 4) | 0
                  }
              })((a + 540) | 0),
              !(function (a) {
                a |= 0
                var b = 0,
                  d = 0,
                  e = 0,
                  g = 0,
                  h = 0,
                  i = 0,
                  j = 0,
                  k = 0,
                  l = 0,
                  m = 0,
                  n = 0,
                  o = 0,
                  p = 0,
                  q = 0,
                  r = 0,
                  s = 0,
                  t = 0,
                  u = 0
                if (
                  ((b = 0 | c[(a + 544) >> 2]),
                  (n = 0 | c[(a + 540) >> 2]),
                  (s = (b + ((52 * n) | 0)) | 0),
                  !((0 | n) <= 0))
                ) {
                  n = 0 == (0 | c[(a + 620) >> 2])
                  do {
                    a: do {
                      if (
                        0 == (0 | c[b >> 2]) &&
                        ((o = +f[(b + 44) >> 2]),
                        (p = +f[(b + 20) >> 2]),
                        (q = +f[(b + 24) >> 2]),
                        (r = 0 | c[(b + 28) >> 2]),
                        (l = 0 | c[(b + 32) >> 2]),
                        (t = (r + ((28 * l) | 0)) | 0),
                        0 < (0 | l))
                      ) {
                        if (!n)
                          for (l = r; ; ) {
                            h = 0 | c[l >> 2]
                            do {
                              if (1 <= (0 | h)) {
                                if (
                                  ((g = 0 | c[(l + 4) >> 2]),
                                  (e = +f[g >> 2]),
                                  (d = e - p),
                                  1 == (0 | h))
                                ) {
                                  ;(h = !(o < p + e) | !(d < o)),
                                    (d = a = 0),
                                    (m = 41)
                                  break
                                }
                                if (o < d) {
                                  ;(g = (l + 16) | 0),
                                    (i = 1),
                                    (d = a = 0),
                                    (m = 43)
                                  break
                                }
                                if (o < p + e) (d = a = h = 0), (m = 41)
                                else {
                                  for (a = 1; ; ) {
                                    if (
                                      ((d = +f[(g + (a << 2)) >> 2]), o < p + d)
                                    )
                                      break
                                    if (!((0 | (a = (a + 1) | 0)) < (0 | h))) {
                                      m = 40
                                      break
                                    }
                                    e = d
                                  }
                                  if (40 == (0 | m)) {
                                    ;(g = (l + 16) | 0),
                                      (a = (h + -(i = 1)) | 0),
                                      (d = 0),
                                      (m = 43)
                                    break
                                  }
                                  m =
                                    ((d =
                                      d - p < o
                                        ? (h = 0)
                                        : ((a = (a + -1) | 0),
                                          (d -= e) < q
                                            ? (h = 0)
                                            : ((h = 0), (o - e) / d))),
                                    41)
                                }
                              } else (d = a = h = 0), (m = 41)
                            } while (0)
                            if (
                              (41 == (0 | m) &&
                                (h |
                                ((m = 0) == (0 | c[(g = (l + 16) | 0) >> 2]))
                                  ? ((i = 1 & h), (m = 43))
                                  : ((c[(l + 24) >> 2] = 1),
                                    (c[(l + 20) >> 2] = 1),
                                    (k = (l + 8) | 0),
                                    (j = (l + 12) | 0),
                                    (h = 0))),
                              43 == (0 | m) &&
                                ((e = +f[(j = (l + 12) | (m = 0)) >> 2]),
                                (u = e != d),
                                (h =
                                  1 &
                                  (((0 | c[(k = (l + 8) | 0) >> 2]) !=
                                    (0 | a)) |
                                    (u & ((0 == d) | (0 == e))))),
                                (c[(l + 24) >> 2] = 1 & u),
                                (c[(l + 20) >> 2] = h),
                                (h = i)),
                              (f[j >> 2] = d),
                              (c[k >> 2] = a),
                              (c[g >> 2] = h),
                              t >>> 0 <= (l = (l + 28) | 0) >>> 0)
                            )
                              break a
                          }
                        if (!(0 | c[(b + 48) >> 2]))
                          for (a = r; ; )
                            if (
                              ((c[(a + 24) >> 2] = 0),
                              (c[(a + 20) >> 2] = 0),
                              t >>> 0 <= (a = (a + 28) | 0) >>> 0)
                            )
                              break a
                        l = r
                        do {
                          h = 0 | c[l >> 2]
                          do {
                            if (1 <= (0 | h)) {
                              if (
                                ((g = 0 | c[(l + 4) >> 2]),
                                (e = +f[g >> 2]),
                                (d = e - p),
                                1 == (0 | h))
                              ) {
                                ;(h = !(o < p + e) | !(d < o)),
                                  (d = a = 0),
                                  (m = 24)
                                break
                              }
                              if (o < d) {
                                ;(g = (l + 16) | 0),
                                  (i = 1),
                                  (d = a = 0),
                                  (m = 26)
                                break
                              }
                              if (o < p + e) (d = a = h = 0), (m = 24)
                              else {
                                for (a = 1; ; ) {
                                  if (
                                    ((d = +f[(g + (a << 2)) >> 2]), o < p + d)
                                  )
                                    break
                                  if (!((0 | (a = (a + 1) | 0)) < (0 | h))) {
                                    m = 21
                                    break
                                  }
                                  e = d
                                }
                                if (21 == (0 | m)) {
                                  ;(g = (l + 16) | 0),
                                    (a = (h + -(i = 1)) | 0),
                                    (d = 0),
                                    (m = 26)
                                  break
                                }
                                m =
                                  ((d =
                                    d - p < o
                                      ? (h = 0)
                                      : ((a = (a + -1) | 0),
                                        (d -= e) < q
                                          ? (h = 0)
                                          : ((h = 0), (o - e) / d))),
                                  24)
                              }
                            } else (d = a = h = 0), (m = 24)
                          } while (0)
                        } while (
                          (24 == (0 | m) &&
                            (h | ((m = 0) == (0 | c[(g = (l + 16) | 0) >> 2]))
                              ? ((i = 1 & h), (m = 26))
                              : ((c[(l + 24) >> 2] = 1),
                                (c[(l + 20) >> 2] = 1),
                                (k = (l + 8) | 0),
                                (j = (l + 12) | 0),
                                (h = 0))),
                          26 == (0 | m) &&
                            ((e = +f[(j = (l + 12) | (m = 0)) >> 2]),
                            (u = e != d),
                            (h =
                              1 &
                              (((0 | c[(k = (l + 8) | 0) >> 2]) != (0 | a)) |
                                (u & ((0 == d) | (0 == e))))),
                            (c[(l + 24) >> 2] = 1 & u),
                            (c[(l + 20) >> 2] = h),
                            (h = i)),
                          (f[j >> 2] = d),
                          (c[k >> 2] = a),
                          (c[g >> 2] = h),
                          (l = (l + 28) | 0) >>> 0 < t >>> 0)
                        )
                      }
                    } while (0)
                  } while ((b = (b + 52) | 0) >>> 0 < s >>> 0)
                }
              })(a),
              Qb(a),
              !(function (a) {
                a |= 0
                var b = 0,
                  d = 0,
                  e = 0,
                  g = 0,
                  h = 0,
                  i = 0,
                  j = 0,
                  k = 0,
                  l = 0,
                  m = 0,
                  n = 0,
                  o = 0,
                  p = 0,
                  q = 0,
                  r = 0,
                  s = 0,
                  t = 0,
                  u = 0,
                  w = 0,
                  x = 0,
                  y = 0,
                  z = 0
                if (
                  ((b = 0 | c[(a + 568) >> 2]),
                  (p = 0 | c[(a + 564) >> 2]),
                  (t = (b + ((36 * p) | 0)) | 0),
                  !((0 | p) <= 0))
                ) {
                  p = 0 == (0 | c[(a + 620) >> 2])
                  do {
                    o = 0 | c[(b + 4) >> 2]
                    a: do {
                      if (0 < (0 | o))
                        for (i = 0 | c[b >> 2], e = a = d = j = 0; ; ) {
                          if (
                            ((g = 0 | c[(i + (j << 2)) >> 2]),
                            0 | c[(g + 16) >> 2])
                          ) {
                            ;(e = 1), (a = d = 0)
                            break a
                          }
                          if (
                            ((e = e || 0 | c[(g + 24) >> 2]),
                            (a = a || 0 | c[(g + 20) >> 2]),
                            (d = (d + ((0 != +f[(g + 12) >> 2]) & 1)) | 0),
                            (0 | o) <= (0 | (j = (j + 1) | 0)))
                          ) {
                            ;(i = d), (x = 11)
                            break
                          }
                        }
                      else (e = a = i = 0), (x = 11)
                    } while (0)
                    b: do {
                      if (11 == (0 | x))
                        if (
                          ((d = p ? a : 1),
                          (x = 0) != ((a = p ? e : 1) | d | 0) &&
                            ((w = 1 << i),
                            (c[(b + 12) >> 2] = w),
                            (q = 0 | c[b >> 2]),
                            (r = 0 | c[(b + 16) >> 2]),
                            (s = 0 | c[(b + 20) >> 2]),
                            (u = (r + (w << 2)) | 0),
                            31 != (0 | i)))
                        ) {
                          for (
                            $c(
                              0 | r,
                              0,
                              ((((e = (r + 4) | 0) >>> 0 < u >>> 0 ? u : e) +
                                ~r +
                                4) &
                                -4) |
                                0
                            ),
                              e = (s + (w << 2)) | 0,
                              g = s;
                            (f[g >> 2] = 1), (g = (g + 4) | 0) >>> 0 < e >>> 0;

                          );
                          if (1 <= (0 | o)) {
                            if (!i)
                              for (i = 0, k = 1; ; ) {
                                if (
                                  ((g = 0 | c[(q + (i << 2)) >> 2]),
                                  (j = 0 | v(0 | c[(g + 8) >> 2], k)),
                                  0 == (h = +f[(g + 12) >> 2]))
                                )
                                  for (
                                    e = 0;
                                    (c[(n = (r + (e << 2)) | 0) >> 2] =
                                      (0 | c[n >> 2]) + j),
                                      (0 | (e = (e + 1) | 0)) != (0 | w);

                                  );
                                else
                                  (c[r >> 2] = (0 | c[r >> 2]) + j),
                                    (f[s >> 2] = (1 - h) * +f[s >> 2])
                                if (
                                  ((k = 0 | v(0 | c[g >> 2], k)),
                                  (0 | (i = (i + 1) | 0)) == (0 | o))
                                ) {
                                  e = 0
                                  break b
                                }
                              }
                            ;(m = 0), (n = e = 1)
                            do {
                              if (
                                ((l = 0 | c[(q + (m << 2)) >> 2]),
                                (g = 0 | c[(8 + l) >> 2]),
                                (k = 0 | v(g, n)),
                                0 == (h = +f[(j = (12 + l) | 0) >> 2]))
                              )
                                for (
                                  g = 0;
                                  (c[(j = (r + (g << 2)) | 0) >> 2] =
                                    (0 | c[j >> 2]) + k),
                                    (0 | (g = (g + 1) | 0)) != (0 | w);

                                );
                              else {
                                for (
                                  i = 0 | v((g + 1) | 0, n),
                                    c[r >> 2] = (0 | c[r >> 2]) + k,
                                    f[s >> 2] = (1 - h) * +f[s >> 2],
                                    g = 1;
                                  (h = +f[j >> 2]),
                                    (z = 0 != ((g & e) | 0)),
                                    (c[(y = (r + (g << 2)) | 0) >> 2] =
                                      (z ? i : k) + (0 | c[y >> 2])),
                                    (f[(y = (s + (g << 2)) | 0) >> 2] =
                                      (z ? h : 1 - h) * +f[y >> 2]),
                                    (0 | (g = (g + 1) | 0)) != (0 | w);

                                );
                                e <<= 1
                              }
                            } while (
                              ((n = 0 | v(0 | c[l >> 2], n)),
                              (0 | (m = (m + 1) | 0)) != (0 | o))
                            )
                            e = 0
                          } else e = 0
                        } else e = 0
                    } while (0)
                  } while (
                    ((c[(b + 28) >> 2] = a),
                    (c[(b + 24) >> 2] = d),
                    (c[(b + 32) >> 2] = e),
                    (b = (b + 36) | 0) >>> 0 < t >>> 0)
                  )
                }
              })(a),
              Rb(a),
              (e = 0 | c[(a + 4) >> 2]),
              (d = ((b = 0 | c[(a + 52) >> 2]) + (e << 2)) | 0),
              0 < (0 | e))
            )
              for (
                ;
                (g = +f[b >> 2]),
                  (f[b >> 2] = g < 0 ? 0 : 1 < g ? 1 : g),
                  (b = (b + 4) | 0) >>> 0 < d >>> 0;

              );
            !(function (a, b, d) {
              ;(a |= 0), (b |= 0), (d |= 0)
              var e = 0,
                f = 0
              if (((f = (b + ((12 * a) | 0)) | 0), !((0 | a) <= 0)))
                for (e = d; ; ) {
                  do {
                    if (0 | c[(b + 8) >> 2]) {
                      if (
                        -1 != (0 | (a = 0 | c[(b + 4) >> 2])) &&
                        0 == (0 | c[(d + (a << 2)) >> 2])
                      ) {
                        a = 0
                        break
                      }
                      a = 0 == (0 | c[(32 + (0 | c[b >> 2])) >> 2])
                    } else a = 0
                  } while (0)
                  if (
                    ((c[e >> 2] = 1 & a), f >>> 0 <= (b = (b + 12) | 0) >>> 0)
                  )
                    break
                  e = (e + 4) | 0
                }
            })(e, 0 | c[(a + 8) >> 2], 0 | c[(a + 40) >> 2]),
              (function (a) {
                var e,
                  f,
                  i,
                  q,
                  r,
                  b = 0,
                  d = 0,
                  g = 0,
                  h = 0,
                  k = 0,
                  l = 0,
                  o = 0,
                  p = 0,
                  s = 0,
                  t = 0,
                  u = 0,
                  j = 0 | c[((a |= 0) + 8) >> 2],
                  b = 0 | c[a >> 2],
                  m = 0 | c[(b + 724) >> 2],
                  n = 0 | c[(a + 4) >> 2]
                if (!((0 | n) <= 0))
                  for (
                    q = (a + 28) | 0,
                      r = (a + 36) | 0,
                      i = (a + 32) | 0,
                      f = (b + 976) | 0,
                      h = g = 0;
                    ;

                  ) {
                    if (
                      ((e = 0 | c[(j + ((12 * g) | 0)) >> 2]),
                      6 ==
                        (0 |
                          (u =
                            0 != (0 | c[(a = (24 + e) | 0) >> 2]) ||
                            0 | c[(28 + e) >> 2]
                              ? 6
                              : u)) &&
                        ((c[(((u = 0) | c[q >> 2]) + (g << 2)) >> 2] =
                          c[(p = (12 + e) | 0) >> 2]),
                        0 | c[a >> 2]) &&
                        ((o = 0 | c[(m + (g << 2)) >> 2]),
                        (s =
                          ((k = 0 | c[(16 + e) >> 2]) +
                            ((d = 0 | c[p >> 2]) << 2)) |
                          0),
                        0 < (0 | d)))
                    )
                      for (
                        a = 0 | c[f >> 2],
                          b = ((0 | c[r >> 2]) + (h << 2)) | 0,
                          d = k;
                        ;

                      ) {
                        if (
                          ((c[b >> 2] =
                            c[(a + (((0 | c[d >> 2]) + o) << 2)) >> 2]),
                          s >>> 0 <= (d = (d + 4) | 0) >>> 0)
                        )
                          break
                        b = (b + 4) | 0
                      }
                    if (
                      0 | c[(28 + e) >> 2] &&
                      ((t =
                        ((l = 0 | c[(20 + e) >> 2]) +
                          ((d = 0 | c[(12 + e) >> 2]) << 2)) |
                        0),
                      0 < (0 | d))
                    )
                      for (a = ((0 | c[i >> 2]) + (h << 2)) | 0, b = l; ; ) {
                        if (
                          ((c[a >> 2] = c[b >> 2]),
                          t >>> 0 <= (b = (b + 4) | 0) >>> 0)
                        )
                          break
                        a = (a + 4) | 0
                      }
                    if ((0 | (g = (g + 1) | 0)) == (0 | n)) break
                    h = ((0 | c[(8 + e) >> 2]) + h) | 0
                  }
              })(a),
              (function (a) {
                Aa(
                  ((a |= 0) + 12) | 0,
                  0 | c[(a + 36) >> 2],
                  0 | c[(a + 44) >> 2],
                  0 | c[(a + 40) >> 2]
                )
              })(a),
              (function (a) {
                var b = 0,
                  d = 0,
                  e = 0,
                  f = 0,
                  g = 0,
                  h = 0,
                  i = 0,
                  j = 0,
                  k = 0
                if (
                  ((j = S = ((k = S) + 63) & -64),
                  (S = (S + 16) | 0),
                  (b = c[((a = a | 0) + 308) >> 2] | 0),
                  (e = c[(a + 304) >> 2] | 0),
                  (i = (b + (e << 5)) | 0),
                  (f = c[(a + 40) >> 2] | 0),
                  (g = c[(a + 312) >> 2] | 0),
                  (h = c[(a + 144) >> 2] | 0),
                  (d = c[(a + 264) >> 2] | 0),
                  (0 | e) <= 0)
                )
                  S = k
                else {
                  for (e = g; ; ) {
                    do {
                      if (0 | c[(b + 28) >> 2]) {
                        if (
                          -1 != (0 | (a = 0 | c[(b + 4) >> 2])) &&
                          0 == (0 | c[(f + (a << 2)) >> 2])
                        ) {
                          a = 0
                          break
                        }
                        if (
                          -1 != (0 | (a = 0 | c[(b + 8) >> 2])) &&
                          0 == (0 | c[(g + (a << 2)) >> 2])
                        ) {
                          a = 0
                          break
                        }
                        a = 0 == (0 | c[(32 + (0 | c[b >> 2])) >> 2])
                      } else a = 0
                    } while (0)
                    switch (((a &= 1), (c[e >> 2] = a), 0 | c[(b + 12) >> 2])) {
                      case 0:
                        c[(h + (c[(b + 16) >> 2] << 2)) >> 2] = a
                        break
                      case 1:
                        c[(d + (c[(b + 16) >> 2] << 2)) >> 2] = a
                        break
                      default:
                        ia(0, 2874, j)
                    }
                    if (i >>> 0 <= (b = (b + 32) | 0) >>> 0) break
                    e = (e + 4) | 0
                  }
                  S = k
                }
              })(a),
              Eb(a),
              Fb(a),
              va(a),
              wa(a),
              (function (a) {
                a |= 0
                var b = 0,
                  d = 0,
                  e = 0,
                  f = 0,
                  g = 0
                if (
                  ((b = 0 | c[(a + 336) >> 2]),
                  (d = 0 | c[(a + 332) >> 2]),
                  (g = (b + ((20 * d) | 0)) | 0),
                  (e = 0 | c[(a + 40) >> 2]),
                  (f = 0 | c[(a + 312) >> 2]),
                  !((0 | d) <= 0))
                )
                  for (d = 0 | c[(a + 424) >> 2]; ; ) {
                    do {
                      if (0 | c[(b + 12) >> 2]) {
                        if (
                          -1 != (0 | (a = 0 | c[(b + 4) >> 2])) &&
                          0 == (0 | c[(e + (a << 2)) >> 2])
                        ) {
                          a = 0
                          break
                        }
                        if (
                          -1 != (0 | (a = 0 | c[(b + 8) >> 2])) &&
                          0 == (0 | c[(f + (a << 2)) >> 2])
                        ) {
                          a = 0
                          break
                        }
                        a = 0 == (0 | c[(32 + (0 | c[b >> 2])) >> 2])
                      } else a = 0
                    } while (0)
                    if (
                      ((c[d >> 2] = 1 & a), g >>> 0 <= (b = (b + 20) | 0) >>> 0)
                    )
                      break
                    d = (d + 4) | 0
                  }
              })(a),
              Gb(a),
              xa(a),
              (function (a) {
                var e,
                  f,
                  i,
                  q,
                  r,
                  b = 0,
                  d = 0,
                  g = 0,
                  h = 0,
                  k = 0,
                  l = 0,
                  o = 0,
                  p = 0,
                  s = 0,
                  t = 0,
                  u = 0,
                  j = 0 | c[((a |= 0) + 504) >> 2],
                  b = 0 | c[a >> 2],
                  m = 0 | c[(b + 1192) >> 2],
                  n = 0 | c[(a + 500) >> 2]
                if (!((0 | n) <= 0))
                  for (
                    q = (a + 524) | 0,
                      r = (a + 532) | 0,
                      i = (a + 528) | 0,
                      f = (b + 1224) | 0,
                      h = g = 0;
                    ;

                  ) {
                    if (
                      ((e = 0 | c[(j + ((24 * g) | 0)) >> 2]),
                      6 ==
                        (0 |
                          (u =
                            0 != (0 | c[(a = (24 + e) | 0) >> 2]) ||
                            0 | c[(28 + e) >> 2]
                              ? 6
                              : u)) &&
                        ((c[(((u = 0) | c[q >> 2]) + (g << 2)) >> 2] =
                          c[(p = (12 + e) | 0) >> 2]),
                        0 | c[a >> 2]) &&
                        ((o = 0 | c[(m + (g << 2)) >> 2]),
                        (s =
                          ((k = 0 | c[(16 + e) >> 2]) +
                            ((d = 0 | c[p >> 2]) << 2)) |
                          0),
                        0 < (0 | d)))
                    )
                      for (
                        a = 0 | c[f >> 2],
                          b = ((0 | c[r >> 2]) + (h << 2)) | 0,
                          d = k;
                        ;

                      ) {
                        if (
                          ((c[b >> 2] =
                            c[(a + (((0 | c[d >> 2]) + o) << 2)) >> 2]),
                          s >>> 0 <= (d = (d + 4) | 0) >>> 0)
                        )
                          break
                        b = (b + 4) | 0
                      }
                    if (
                      0 | c[(28 + e) >> 2] &&
                      ((t =
                        ((l = 0 | c[(20 + e) >> 2]) +
                          ((d = 0 | c[(12 + e) >> 2]) << 2)) |
                        0),
                      0 < (0 | d))
                    )
                      for (a = ((0 | c[i >> 2]) + (h << 2)) | 0, b = l; ; ) {
                        if (
                          ((c[a >> 2] = c[b >> 2]),
                          t >>> 0 <= (b = (b + 4) | 0) >>> 0)
                        )
                          break
                        a = (a + 4) | 0
                      }
                    if ((0 | (g = (g + 1) | 0)) == (0 | n)) break
                    h = ((0 | c[(8 + e) >> 2]) + h) | 0
                  }
              })(a),
              (function (a) {
                za(
                  ((a |= 0) + 508) | 0,
                  0 | c[(a + 532) >> 2],
                  0 | c[(a + 536) >> 2],
                  0
                )
              })(a),
              fa(a),
              ha(a),
              (function (a) {
                var b = 0,
                  d = 0,
                  g = 0,
                  h = 0,
                  j = 0,
                  i =
                    ((b = 0 | c[((a |= 0) + 8) >> 2]) +
                      ((12 * (j = 0 | c[(a + 4) >> 2])) | 0)) |
                    0,
                  e = 0 | c[(a + 48) >> 2]
                if (!((0 | j) <= 0))
                  for (
                    j = 0 | c[(a + 40) >> 2], d = e, a = 0 | c[(a + 52) >> 2];
                    ;

                  ) {
                    if (
                      (0 | c[j >> 2] &&
                        ((g = +f[a >> 2]),
                        (f[d >> 2] = g),
                        -1 != (0 | (h = 0 | c[(b + 4) >> 2]))) &&
                        (f[d >> 2] = g * +f[(e + (h << 2)) >> 2]),
                      i >>> 0 <= (b = (b + 12) | 0) >>> 0)
                    )
                      break
                    ;(j = (j + 4) | 0), (d = (d + 4) | 0), (a = (a + 4) | 0)
                  }
              })(a),
              (function (a) {
                var d = 0,
                  e = 0,
                  f = 0,
                  b = 0 | c[((a |= 0) + 304) >> 2]
                if (!((0 | b) <= 0))
                  for (
                    d = 0 | c[(a + 312) >> 2], e = 0 | c[(a + 308) >> 2], f = 0;
                    ;

                  ) {
                    if (
                      (0 | c[d >> 2] && _[3 & c[(e + 20) >> 2]](a, f),
                      (0 | (f = (f + 1) | 0)) == (0 | b))
                    )
                      break
                    ;(d = (d + 4) | 0), (e = (e + 32) | 0)
                  }
              })(a),
              Ab(a),
              ea(a),
              (function (a) {
                a |= 0
                var g,
                  j,
                  b = 0,
                  d = 0,
                  e = 0,
                  h = 0,
                  i = 0
                if (
                  !(
                    0 | c[(a + 624) >> 2] ||
                    ((g =
                      ((b = 0 | c[(a + 336) >> 2]) +
                        ((20 * (h = 0 | c[(a + 332) >> 2])) | 0)) |
                      0),
                    (0 | h) <= 0)
                  )
                )
                  for (
                    h = 0 | c[(a + 424) >> 2], a = 0 | c[(a + 444) >> 2];
                    ;

                  ) {
                    if (
                      0 | c[h >> 2] &&
                      ((e = 0 | c[a >> 2]),
                      (i = (d = 0 | c[(b + 16) >> 2]) << 1),
                      0 < (0 | d))
                    )
                      for (
                        d = 1;
                        (f[(j = (e + (d << 2)) | 0) >> 2] = -+f[j >> 2]),
                          (0 | (d = (d + 2) | 0)) < (0 | i);

                      );
                    if (g >>> 0 <= (b = (b + 20) | 0) >>> 0) break
                    ;(h = (h + 4) | 0), (a = (a + 4) | 0)
                  }
              })(a),
              (function (a) {
                a |= 0
                var b = 0,
                  d = 0,
                  e = 0,
                  f = 0,
                  g = 0,
                  h = 0,
                  i = 0,
                  j = 0,
                  k = 0,
                  l = 0,
                  m = 0,
                  n = 0,
                  o = 0,
                  p = 0,
                  q = 0,
                  r = 0
                if (
                  ((q = 0 | c[(a + 480) >> 2]),
                  (r = 0 | c[(a + 484) >> 2]),
                  (j = (r + ((28 * q) | 0)) | 0),
                  (b = 0 | c[(a + 440) >> 2]),
                  (d = 0 | c[(a + 44) >> 2]),
                  (e = 0 | c[(a + 40) >> 2]),
                  (f = 0 | c[(a + 424) >> 2]),
                  !((0 | q) <= 0))
                ) {
                  k = r
                  do {
                    if (0 < (0 | (g = 0 | c[(k + 4) >> 2])))
                      for (
                        h = 0 | c[(k + 12) >> 2], i = (k + 20) | 0, l = 0;
                        (p = 0 | c[(h + (l << 4) + 4) >> 2]),
                          (o = 1 == (0 | c[(h + (l << 4)) >> 2])),
                          (c[(h + (l << 4) + 12) >> 2] =
                            c[
                              (0 == (0 | c[((o ? e : f) + (p << 2)) >> 2])
                                ? i
                                : ((o ? d : b) + (p << 2)) | 0) >> 2
                            ]),
                          (0 | (l = (l + 1) | 0)) != (0 | g);

                      );
                  } while ((k = (k + 28) | 0) >>> 0 < j >>> 0)
                  ;(n = 0 | c[(a + 436) >> 2]),
                    (o = (a + 488) | 0),
                    (p = (a + 492) | 0),
                    (l = (a + 496) | 0),
                    (m = 0)
                  do {
                    if (0 < (0 | c[(a = (r + ((28 * m) | 0) + 24) | 0) >> 2])) {
                      for (
                        b = 0 | c[o >> 2], e = 0;
                        (c[(b + (e << 2)) >> 2] = -1),
                          (e = (e + 1) | 0),
                          (d = 0 | c[a >> 2]),
                          (0 | e) < (0 | d);

                      );
                      if (0 < (0 | d))
                        for (
                          b = 0 | c[l >> 2], d = 0;
                          (c[(b + (d << 2)) >> 2] = -1),
                            (0 | (d = (d + 1) | 0)) < (0 | c[a >> 2]);

                        );
                    }
                    if (0 < (0 | c[(k = (r + ((28 * m) | 0) + 4) | 0) >> 2])) {
                      for (
                        j = 0 | c[p >> 2], d = 0;
                        (c[(j + (d << 2)) >> 2] = -1),
                          (d = (d + 1) | 0),
                          (b = 0 | c[k >> 2]),
                          (0 | d) < (0 | b);

                      );
                      if (0 < (0 | b))
                        for (
                          e = 0 | c[(r + ((28 * m) | 0) + 12) >> 2],
                            g = (r + ((28 * m) | 0) + 20) | 0,
                            f = 0 | c[l >> 2],
                            i = 0;
                          (d =
                            ((0 | c[(e + (i << 4) + 12) >> 2]) -
                              (0 | c[g >> 2])) |
                            0),
                            (b =
                              -1 ==
                              (0 | (b = 0 | c[(h = (f + (d << 2)) | 0) >> 2]))
                                ? ((0 | c[o >> 2]) + (d << 2)) | 0
                                : (j + (b << 2)) | 0),
                            (c[b >> 2] = i),
                            (0 | (i = ((c[h >> 2] = i) + 1) | 0)) <
                              (0 | c[k >> 2]);

                        );
                    }
                    if (0 < (0 | (b = 0 | c[a >> 2]))) {
                      ;(i = 0 | c[o >> 2]),
                        (j = (r + ((28 * m) | 0) + 12) | 0),
                        (d = (h = 0) | c[(r + ((28 * m) | 0) + 8) >> 2])
                      do {
                        if (-1 != (0 | (e = 0 | c[(i + (h << 2)) >> 2]))) {
                          for (
                            f = 0 | c[j >> 2], g = 0 | c[p >> 2];
                            (b =
                              1 == (0 | c[(f + (e << 4)) >> 2])
                                ? ((b = 0 | c[(f + (e << 4) + 8) >> 2]),
                                  (c[(r + ((28 * b) | 0) + 8) >> 2] = d),
                                  0 | c[(r + ((28 * b) | 0)) >> 2])
                                : ((c[
                                    (n + (c[(f + (e << 4) + 4) >> 2] << 2)) >> 2
                                  ] = d),
                                  1)),
                              (d = (b + d) | 0),
                              !(
                                ((0 | (e = 0 | c[(g + ((k = e) << 2)) >> 2])) <=
                                  (0 | k)) |
                                (-1 == (0 | e))
                              );

                          );
                          b = 0 | c[a >> 2]
                        }
                      } while ((0 | (h = (h + 1) | 0)) < (0 | b))
                    }
                  } while ((0 | (m = (m + 1) | 0)) != (0 | q))
                }
              })(a),
              Cb(a),
              (c[(a + 620) >> 2] = 0)
          }
          function Qb(a) {
            a |= 0
            var l,
              s,
              b = 0,
              e = 0,
              g = 0,
              h = 0,
              i = 0,
              j = 0,
              k = 0,
              m = 0,
              n = 0,
              o = 0,
              p = 0,
              q = 0,
              r = 0,
              t = 0,
              u = 0
            if (
              !(
                (0 | d[(4 + (0 | c[a >> 2])) >> 0]) < 4 ||
                ((s =
                  ((b = 0 | c[(a + 544) >> 2]) +
                    ((52 * (l = 0 | c[(a + 540) >> 2])) | 0)) |
                  0),
                (0 | l) <= 0)
              )
            ) {
              l = 0 == (0 | c[(a + 620) >> 2])
              do {
                a: do {
                  if (
                    1 == (0 | c[b >> 2]) &&
                    ((q = +f[(b + 44) >> 2]),
                    (r = 0 | c[(b + 36) >> 2]),
                    (k = 0 | c[(b + 40) >> 2]),
                    (t = (r + ((28 * k) | 0)) | 0),
                    0 < (0 | k))
                  ) {
                    if (!l)
                      for (j = r; ; ) {
                        g = 0 | c[j >> 2]
                        do {
                          if (
                            2 <= (0 | g) &&
                            ((o = 0 | c[(j + 4) >> 2]),
                            !(q <= (p = +f[o >> 2])))
                          ) {
                            for (h = 1, i = p; ; ) {
                              if (
                                ((a = (h + 1) | 0),
                                q < (e = +f[(o + (h << 2)) >> 2]))
                              ) {
                                k = 25
                                break
                              }
                              if (!((0 | a) < (0 | g))) {
                                k = 26
                                break
                              }
                              ;(h = a), (i = e)
                            }
                            if (25 == (0 | k)) {
                              ;(a = (h + -1) | 0), (e = (q - i) / (e - i))
                              break
                            }
                            if (26 == (0 | k)) {
                              ;(a = (g + -1) | 0), (e = 0)
                              break
                            }
                          } else e = a = 0
                        } while (0)
                        if (
                          ((i = +f[(h = (j + 16) | 0) >> 2]),
                          (g =
                            1 &
                            (((0 | c[(k = (j + 12) | 0) >> 2]) != (0 | a)) |
                              ((u = i != e) & ((0 == e) | (0 == i))))),
                          (c[(j + 24) >> 2] = 1 & u),
                          (c[(j + 20) >> 2] = g),
                          (f[h >> 2] = e),
                          (c[k >> 2] = a),
                          t >>> 0 <= (j = (j + 28) | 0) >>> 0)
                        )
                          break a
                      }
                    if (!(0 | c[(b + 48) >> 2]))
                      for (a = r; ; )
                        if (
                          ((c[(a + 24) >> 2] = 0),
                          t >>> (c[(a + 20) >> 2] = 0) <=
                            (a = (a + 28) | 0) >>> 0)
                        )
                          break a
                    j = r
                    do {
                      g = 0 | c[j >> 2]
                      do {
                        if (
                          2 <= (0 | g) &&
                          ((m = 0 | c[(j + 4) >> 2]), !(q <= (n = +f[m >> 2])))
                        ) {
                          for (h = 1, i = n; ; ) {
                            if (
                              ((a = (h + 1) | 0),
                              q < (e = +f[(m + (h << 2)) >> 2]))
                            ) {
                              k = 17
                              break
                            }
                            if (!((0 | a) < (0 | g))) {
                              k = 18
                              break
                            }
                            ;(h = a), (i = e)
                          }
                          if (17 == (0 | k)) {
                            ;(a = (h + -1) | 0), (e = (q - i) / (e - i))
                            break
                          }
                          if (18 == (0 | k)) {
                            ;(a = (g + -1) | 0), (e = 0)
                            break
                          }
                        } else e = a = 0
                      } while (0)
                    } while (
                      ((i = +f[(k = (j + 16) | 0) >> 2]),
                      (h =
                        1 &
                        (((0 | c[(u = (j + 12) | 0) >> 2]) != (0 | a)) |
                          ((g = i != e) & ((0 == e) | (0 == i))))),
                      (c[(j + 24) >> 2] = 1 & g),
                      (c[(j + 20) >> 2] = h),
                      (f[k >> 2] = e),
                      (c[u >> 2] = a),
                      (j = (j + 28) | 0) >>> 0 < t >>> 0)
                    )
                  }
                } while (0)
              } while ((b = (b + 52) | 0) >>> 0 < s >>> 0)
            }
          }
          function Rb(a) {
            a |= 0
            var n,
              o,
              q,
              r,
              t,
              y,
              b = 0,
              e = 0,
              g = 0,
              h = 0,
              i = 0,
              j = 0,
              k = 0,
              l = 0,
              m = 0,
              p = 0,
              s = 0,
              u = 0,
              v = 0,
              w = 0,
              x = 0
            if (
              !(
                (0 | d[(4 + (0 | c[a >> 2])) >> 0]) < 4 ||
                ((y =
                  ((b = 0 | c[(a + 592) >> 2]) +
                    ((48 * (t = 0 | c[(a + 588) >> 2])) | 0)) |
                  0),
                (0 | t) <= 0)
              )
            ) {
              t = 0 == (0 | c[(a + 620) >> 2])
              do {
                if (
                  ((a = 0 | c[b >> 2]),
                  (g = t ? 0 | c[(a + 24) >> 2] : 1),
                  (m = t ? 0 | c[(a + 20) >> 2] : 1) | g)
                ) {
                  ;(k = 0 | c[(a + 12) >> 2]),
                    (e = +f[(a + 16) >> 2]),
                    (j = (0 | k) == (0 | (a = 0 | c[(a + 8) >> 2])))
                  do {
                    if (0 != e) {
                      if (((i = (k + 1) | 0), j)) {
                        ;(e = (g = a = c[(b + 8) >> 2] = 1) - e), (s = 11)
                        break
                      }
                      ;(a = (0 | i) == (0 | a) ? 1 : 2), (s = 10)
                      break
                    }
                  } while (((a = 1 & (1 ^ j)), (s = 10), 0))
                  10 == (0 | s) &&
                    ((s = 0),
                    (c[(b + 8) >> 2] = a),
                    g
                      ? ((i = k), (a = m), (s = 11))
                      : ((i = k), (a = m), (g = 0))),
                    11 == (0 | s) &&
                      ((f[(b + 20) >> 2] = 1 - e), (f[(b + 24) >> 2] = e)),
                    a
                      ? ((c[(b + 12) >> 2] = i), (c[(b + 16) >> 2] = i + 1))
                      : (a = 0)
                } else a = m
                q = 0 | c[(b + 36) >> 2]
                a: do {
                  if (0 < (0 | q)) {
                    if (((r = 0 | c[(b + 40) >> 2]), !t))
                      for (k = 0, e = 1; ; ) {
                        ;(j = 0 | c[(r + (k << 2)) >> 2]), (i = 0 | c[j >> 2])
                        do {
                          if (
                            0 != (0 | i) &&
                            ((u = 0 | c[(j + 4) >> 2]),
                            (v = 0 | c[(j + 8) >> 2]),
                            (w = 0 | c[(j + 12) >> 2]),
                            (x = +f[(i + 44) >> 2]),
                            1 <= (0 | w))
                          ) {
                            if (1 == (0 | w)) {
                              h = +f[v >> 2]
                              break
                            }
                            if (x <= (h = +f[u >> 2])) {
                              h = +f[v >> 2]
                              break
                            }
                            for (i = 1; ; ) {
                              if (x < (l = +f[(u + (i << 2)) >> 2])) {
                                s = 43
                                break
                              }
                              if (!((0 | (i = (i + 1) | 0)) < (0 | w))) {
                                s = 44
                                break
                              }
                              h = l
                            }
                            if (43 == (0 | s)) {
                              h =
                                (1 - (h = (x - h) / (l - h))) *
                                  +f[(v + ((i + -1) << 2)) >> 2] +
                                h * +f[(v + (i << 2)) >> 2]
                              break
                            }
                            if (44 == (0 | s)) {
                              h = +f[(v + ((w + -1) << 2)) >> 2]
                              break
                            }
                          } else h = 1
                        } while (0)
                        if (
                          ((e = e < (f[(j + 16) >> 2] = h) ? e : h),
                          (0 | (k = (k + 1) | 0)) == (0 | q))
                        )
                          break a
                      }
                    ;(p = 0), (e = 1)
                    do {
                      ;(o = 0 | c[(r + (p << 2)) >> 2]), (i = 0 | c[o >> 2])
                      do {
                        if (i) {
                          if (!(0 | c[(i + 48) >> 2])) {
                            h = +f[(16 + o) >> 2]
                            break
                          }
                          ;(j = 0 | c[(4 + o) >> 2]),
                            (k = 0 | c[(8 + o) >> 2]),
                            (m = 0 | c[(12 + o) >> 2]),
                            (n = +f[(i + 44) >> 2])
                          do {
                            if (1 <= (0 | m)) {
                              if (1 == (0 | m)) {
                                h = +f[k >> 2]
                                break
                              }
                              if (n <= (h = +f[j >> 2])) {
                                h = +f[k >> 2]
                                break
                              }
                              for (i = 1; ; ) {
                                if (n < (l = +f[(j + (i << 2)) >> 2])) {
                                  s = 29
                                  break
                                }
                                if (!((0 | (i = (i + 1) | 0)) < (0 | m))) {
                                  s = 28
                                  break
                                }
                                h = l
                              }
                              if (28 == (0 | s)) {
                                h = +f[(k + ((m + -1) << 2)) >> 2]
                                break
                              }
                              if (29 == (0 | s)) {
                                h =
                                  (1 - (h = (n - h) / (l - h))) *
                                    +f[(k + ((i + -1) << 2)) >> 2] +
                                  h * +f[(k + (i << 2)) >> 2]
                                break
                              }
                            } else h = 1
                          } while (0)
                          f[(16 + o) >> 2] = h
                        } else h = f[(16 + o) >> 2] = 1
                      } while (0)
                    } while (
                      ((e = e < h ? e : h), (0 | (p = (p + 1) | 0)) != (0 | q))
                    )
                  } else e = 1
                } while (0)
              } while (
                ((f[(b + 44) >> 2] = e),
                (c[(b + 28) >> 2] = a),
                (c[(b + 32) >> 2] = g),
                (b = (b + 48) | 0) >>> 0 < y >>> 0)
              )
            }
          }
          function cc(b, d, e) {
            ;(b |= 0), (d |= 0), (e |= 0)
            var f,
              j,
              h = 0,
              g = S,
              i = (S = (S + 63) & -64)
            ;(S = (S + 144) | 0),
              Zc(0 | i, 640, 144),
              (c[(48 + i) >> 2] = h = (h = (-2 - b) | 0) >>> 0 < 256 ? h : 256),
              (c[(f = (20 + i) | 0) >> 2] = b),
              (j = ((c[(44 + i) >> 2] = b) + h) | 0),
              (c[(b = (16 + i) | 0) >> 2] = j),
              (c[(28 + i) >> 2] = j),
              dc(i, d, e),
              0 | h &&
                ((j = 0 | c[f >> 2]),
                (a[
                  (j + ((((0 | j) == (0 | c[b >> 2])) << 31) >> 31)) >> 0
                ] = 0)),
              (S = g)
          }
          function dc(a, b, c) {
            gc((a |= 0), (b |= 0), (c |= 0))
          }
          function ec(b, e, f, g, h, i) {
            ;(b |= 0), (e = +e), (f |= 0), (g |= 0), (h |= 0), (i |= 0)
            var C,
              j = 0,
              k = 0,
              l = 0,
              m = 0,
              n = 0,
              o = 0,
              p = 0,
              q = 0,
              r = 0,
              s = 0,
              t = 0,
              u = 0,
              w = 0,
              x = 0,
              y = 0,
              A = 0,
              B = 0,
              D = 0,
              E = 0,
              F = 0,
              G = 0,
              H = S,
              l = (S = (S + 63) & -64)
            ;(S = (S + 560) | 0),
              (m = (l + 32) | 0),
              (t = (l + 536) | 0),
              (E = ((l = ((F = G = l) + 540) | 0) + 12) | (c[t >> 2] = 0)),
              vc(e),
              (B =
                (0 | (j = 0 | z())) < 0
                  ? (vc((e = -e)), (j = 0 | z()), (D = 1), 2955)
                  : ((D = (0 != ((2049 & h) | 0)) & 1),
                    0 == ((2048 & h) | 0)
                      ? 0 == ((1 & h) | 0)
                        ? 2956
                        : 2961
                      : 2958))
            do {
              if (!0 & (2146435072 == ((2146435072 & j) | 0)))
                (G = 0 != ((32 & i) | 0)),
                  qc(b, 32, f, (j = (D + 3) | 0), -65537 & h),
                  ic(b, B, D),
                  ic(b, (e != e) | !1 ? (G ? 2982 : 2986) : G ? 2974 : 2978, 3),
                  qc(b, 32, f, j, 8192 ^ h)
              else {
                if (
                  ((j = 0 != (q = 2 * +wc(e, t))) &&
                    (c[t >> 2] = (0 | c[t >> 2]) - 1),
                  97 == (0 | (w = 32 | i)))
                ) {
                  ;(r = 0 == (0 | (o = 32 & i)) ? B : (B + 9) | 0),
                    (p = 2 | D),
                    (j = (12 - g) | 0)
                  do {
                    if (!((11 < g >>> 0) | (0 == (0 | j)))) {
                      for (e = 8; (e *= 16), 0 != (0 | (j = (j + -1) | 0)); );
                      if (45 == (0 | a[r >> 0])) {
                        e = -(e + (-q - e))
                        break
                      }
                      e = q + e - e
                      break
                    }
                  } while (((e = q), 0))
                  for (
                    (0 |
                      (j =
                        0 |
                        oc(
                          (j = (0 | (k = 0 | c[t >> 2])) < 0 ? (0 - k) | 0 : k),
                          (((0 | j) < 0) << 31) >> 31,
                          E
                        ))) ==
                      (0 | E) && (a[(j = (l + 11) | 0) >> 0] = 48),
                      a[(j + -1) >> 0] = 43 + ((k >> 31) & 2),
                      a[(n = (j + -2) | 0) >> 0] = i + 15,
                      k = (0 | g) < 1,
                      l = 0 == ((8 & h) | 0),
                      j = G;
                    ;

                  ) {
                    if (
                      ((m = (j + 1) | 0),
                      (a[j >> 0] = o | d[(480 + (D = ~~e)) >> 0]),
                      (e = 16 * (e - (0 | D))),
                      1 != ((m - F) | 0) ||
                        l & k & (0 == e) ||
                        ((a[m >> 0] = 46), (m = (j + 2) | 0)),
                      0 == e)
                    )
                      break
                    j = m
                  }
                  qc(
                    b,
                    32,
                    f,
                    (E =
                      ((j =
                        0 != (0 | g) && ((-2 - F + m) | 0) < (0 | g)
                          ? (g + 2 + (k = E) - (l = n)) | 0
                          : ((k = E) - F - (l = n) + m) | 0) +
                        p) |
                      0),
                    h
                  ),
                    ic(b, r, p),
                    qc(b, 48, f, E, 65536 ^ h),
                    ic(b, G, (F = (m - F) | 0)),
                    qc(b, 48, (j - (F + (G = (k - l) | 0))) | 0, 0, 0),
                    ic(b, n, G),
                    qc(b, 32, f, E, 8192 ^ h),
                    (j = E)
                  break
                }
                for (
                  k = (0 | g) < 0 ? 6 : g,
                    e = j
                      ? ((l = ((0 | c[t >> 2]) - 28) | 0),
                        (c[t >> 2] = l),
                        268435456 * q)
                      : ((l = 0 | c[t >> 2]), q),
                    m = C = (0 | l) < 0 ? m : (m + 288) | 0;
                  (c[m >> 2] = y = ~~e >>> 0),
                    (m = (m + 4) | 0),
                    0 != (e = 1e9 * (e - (y >>> 0)));

                );
                if (((y = C), 0 < (0 | l))) {
                  j = C
                  do {
                    if (
                      ((o = (0 | l) < 29 ? l : 29),
                      j >>> 0 <= (l = (m + -4) | 0) >>> 0)
                    ) {
                      for (
                        n = 0;
                        (s =
                          0 |
                          Rc(
                            0 | (s = 0 | Xc(0 | c[l >> 2], 0, 0 | o)),
                            0 | z(),
                            0 | n,
                            0
                          )),
                          (x =
                            0 |
                            Rc(
                              0 | s,
                              0 | (u = 0 | z()),
                              0 |
                                (x =
                                  0 |
                                  Qc(
                                    0 | (n = 0 | Vc(0 | s, 0 | u, 1e9, 0)),
                                    0 | z(),
                                    -1e9,
                                    -1
                                  )),
                              0 | z()
                            )),
                          z(),
                          (c[l >> 2] = x),
                          j >>> 0 <= (l = (l + -4) | 0) >>> 0;

                      );
                      n && (c[(j = (j + -4) | 0) >> 2] = n)
                    }
                    a: do {
                      if (j >>> 0 < m >>> 0)
                        for (;;) {
                          if (0 | c[(l = (m + -4) | 0) >> 2]) break a
                          if (!(j >>> 0 < l >>> 0)) {
                            m = l
                            break
                          }
                          m = l
                        }
                    } while (0)
                  } while (
                    ((l = ((0 | c[t >> 2]) - o) | 0), 0 < (0 | (c[t >> 2] = l)))
                  )
                } else j = C
                if ((0 | l) < 0) {
                  ;(g = (1 + ((((k + 25) | 0) / 9) | 0)) | 0),
                    (s = 102 == (0 | w))
                  do {
                    if (
                      ((r = (0 | (r = (0 - l) | 0)) < 9 ? r : 9),
                      j >>> 0 < m >>> 0)
                    ) {
                      for (
                        o = ((1 << r) - 1) | 0,
                          n = r ? 1e9 >>> r : 1e9,
                          p = 0,
                          l = j;
                        (x = 0 | c[l >> 2]),
                          (c[l >> 2] = (r ? x >>> r : x) + p),
                          (p = 0 | v(x & o, n)),
                          (l = (l + 4) | 0) >>> 0 < m >>> 0;

                      );
                      ;(j = 0 == (0 | c[j >> 2]) ? (j + 4) | 0 : j),
                        p && ((c[m >> 2] = p), (m = (m + 4) | 0))
                    } else j = 0 == (0 | c[j >> 2]) ? (j + 4) | 0 : j
                  } while (
                    ((m =
                      (0 | g) < (((x = (m - (l = s ? C : j)) | 0) >> 2) | 0)
                        ? (l + (g << 2)) | 0
                        : m),
                    (l = ((0 | c[t >> 2]) + r) | 0),
                    (0 | (c[t >> 2] = l)) < 0)
                  )
                  s = m
                } else s = m
                if (j >>> 0 < s >>> 0) {
                  if (
                    ((l = (9 * ((l = (y - j) | 0) >> 2)) | 0),
                    10 <= (n = 0 | c[j >> 2]) >>> 0)
                  )
                    for (
                      m = 10;
                      (l = (l + 1) | 0), (m = (10 * m) | 0) >>> 0 <= n >>> 0;

                    );
                } else l = 0
                if (
                  (0 |
                    (m =
                      (k -
                        (102 == (0 | w) ? 0 : l) +
                        ((((u = 0 != (0 | k)) & (t = 103 == (0 | w))) << 31) >>
                          31)) |
                      0)) <
                  ((((9 * ((x = (s - y) | 0) >> 2)) | 0) - 9) | 0)
                ) {
                  if (
                    ((g =
                      (C +
                        4 +
                        (((m = ((0 | (x = (m + 9216) | 0)) / 9) | 0) + -1024) <<
                          2)) |
                      0),
                    (0 | (m = (x + (0 | v(m, -9))) | 0)) < 8)
                  )
                    for (n = 10; ; ) {
                      if (((n = (10 * n) | 0), !((0 | m) < 7))) break
                      m = (m + 1) | 0
                    }
                  else n = 10
                  if (
                    (p = ((g + 4) | 0) == (0 | s)) &
                    (0 ==
                      (0 |
                        (o =
                          ((o = 0 | c[g >> 2]) -
                            (r = 0 | v((m = ((o >>> 0) / (n >>> 0)) | 0), n))) |
                          0)))
                  )
                    m = g
                  else if (
                    ((q =
                      0 == ((1 & m) | 0) ? 9007199254740992 : 9007199254740994),
                    (e =
                      o >>> 0 < (x = n >>> 1) >>> 0
                        ? 0.5
                        : p & ((0 | o) == (0 | x))
                        ? 1
                        : 1.5),
                    D &&
                      ((q = (x = 45 == (0 | a[B >> 0])) ? -q : q),
                      (e = x ? -e : e)),
                    (c[g >> 2] = r),
                    q + e != q)
                  ) {
                    if (999999999 < (c[g >> 2] = x = (r + n) | 0) >>> 0)
                      for (l = g; ; ) {
                        if (
                          ((m = (l + -4) | 0) >>> (c[l >> 2] = 0) < j >>> 0 &&
                            (c[(j = (j + -4) | 0) >> 2] = 0),
                          (x = (1 + (0 | c[m >> 2])) | 0),
                          !(999999999 < (c[m >> 2] = x) >>> 0))
                        )
                          break
                        l = m
                      }
                    else m = g
                    if (
                      ((l = (9 * ((l = (y - j) | 0) >> 2)) | 0),
                      10 <= (o = 0 | c[j >> 2]) >>> 0)
                    )
                      for (
                        n = 10;
                        (l = (l + 1) | 0), (n = (10 * n) | 0) >>> 0 <= o >>> 0;

                      );
                  } else m = g
                  ;(x = j), (j = (w = (m + 4) | 0) >>> 0 < s >>> 0 ? w : s)
                } else (x = j), (j = s)
                r = (0 - l) | 0
                b: do {
                  if (x >>> 0 < j >>> 0)
                    for (;;) {
                      if (0 | c[(m = (j + -4) | 0) >> 2]) {
                        ;(s = 1), (w = j)
                        break b
                      }
                      if (!(x >>> 0 < m >>> 0)) {
                        ;(s = 0), (w = m)
                        break
                      }
                      j = m
                    }
                  else (s = 0), (w = j)
                } while (0)
                do {
                  if (t) {
                    if (
                      ((n =
                        ((0 | l) < (0 | (j = (k + (1 & (1 ^ u))) | 0))) &
                        (-5 < (0 | l))
                          ? ((k = (j + -1 - l) | 0), (i + -1) | 0)
                          : ((k = (j + -1) | 0), (i + -2) | 0)),
                      !(8 & h))
                    ) {
                      if (s && 0 != (0 | (A = 0 | c[(w + -4) >> 2])))
                        if ((A >>> 0) % 10 | 0) m = 0
                        else
                          for (
                            j = 10, m = 0;
                            (m = (m + 1) | 0),
                              !((A >>> 0) % ((j = (10 * j) | 0) >>> 0) | 0);

                          );
                      else m = 9
                      if (
                        ((j = (((9 * ((j = (w - y) | 0) >> 2)) | 0) - 9) | 0),
                        102 == (32 | n))
                      ) {
                        k =
                          (0 | k) <
                          (0 | (i = 0 < (0 | (i = (j - m) | 0)) ? i : 0))
                            ? k
                            : i
                        break
                      }
                      k =
                        (0 | k) <
                        (0 | (i = 0 < (0 | (i = (j + l - m) | 0)) ? i : 0))
                          ? k
                          : i
                      break
                    }
                  } else n = i
                } while (0)
                if (
                  ((o = (g = 0 != (0 | k)) ? 1 : (h >>> 3) & 1),
                  (p = 102 == (32 | n)))
                )
                  j = (u = 0) < (0 | l) ? l : 0
                else {
                  if (
                    (((m = E) -
                      (j =
                        0 |
                        oc(
                          (j = (0 | l) < 0 ? r : l),
                          (((0 | j) < 0) << 31) >> 31,
                          E
                        ))) |
                      0) <
                    2
                  )
                    for (
                      ;
                      (a[(j = (j + -1) | 0) >> 0] = 48), ((m - j) | 0) < 2;

                    );
                  ;(a[(j + -1) >> 0] = 43 + ((l >> 31) & 2)),
                    (a[(j = (j + -2) | 0) >> 0] = n),
                    (j = (m - (u = j)) | 0)
                }
                if (
                  (qc(b, 32, f, (j = (D + 1 + k + o + j) | 0), h),
                  ic(b, B, D),
                  qc(b, 48, f, j, 65536 ^ h),
                  p)
                ) {
                  ;(p = r = (G + 9) | 0),
                    (n = (G + 8) | 0),
                    (m = o = C >>> 0 < x >>> 0 ? C : x)
                  do {
                    if (((l = 0 | oc(0 | c[m >> 2], 0, r)), (0 | m) == (0 | o)))
                      (0 | l) == (0 | r) && ((a[n >> 0] = 48), (l = n))
                    else if (G >>> 0 < l >>> 0)
                      for (
                        $c(0 | G, 48, (l - F) | 0);
                        G >>> 0 < (l = (l + -1) | 0) >>> 0;

                      );
                  } while (
                    (ic(b, l, (p - l) | 0), (m = (m + 4) | 0) >>> 0 <= C >>> 0)
                  )
                  if (
                    ((0 == ((8 & h) | 0)) & (1 ^ g) || ic(b, 2990, 1),
                    (m >>> 0 < w >>> 0) & (0 < (0 | k)))
                  )
                    for (;;) {
                      if (G >>> 0 < (l = 0 | oc(0 | c[m >> 2], 0, r)) >>> 0)
                        for (
                          $c(0 | G, 48, (l - F) | 0);
                          G >>> 0 < (l = (l + -1) | 0) >>> 0;

                        );
                      if (
                        (ic(b, l, (0 | k) < 9 ? k : 9),
                        (l = (k + -9) | 0),
                        !(((m = (m + 4) | 0) >>> 0 < w >>> 0) & (9 < (0 | k))))
                      ) {
                        k = l
                        break
                      }
                      k = l
                    }
                  qc(b, 48, (k + 9) | 0, 9, 0)
                } else {
                  if (
                    (x >>> 0 < (g = s ? w : (x + 4) | 0) >>> 0) &
                    (-1 < (0 | k))
                  ) {
                    ;(t = 0 == ((8 & h) | 0)),
                      (s = r = (G + 9) | 0),
                      (n = (0 - F) | 0),
                      (p = (G + 8) | 0),
                      (o = x)
                    do {
                      ;(0 | (l = 0 | oc(0 | c[o >> 2], 0, r))) == (0 | r) &&
                        ((a[p >> 0] = 48), (l = p))
                      do {
                        if ((0 | o) == (0 | x)) {
                          if (
                            ((m = (l + 1) | 0), ic(b, l, 1), t & ((0 | k) < 1))
                          ) {
                            l = m
                            break
                          }
                          ic(b, 2990, 1), (l = m)
                        } else {
                          if (l >>> 0 <= G >>> 0) break
                          for (
                            $c(0 | G, 48, (l + n) | 0);
                            G >>> 0 < (l = (l + -1) | 0) >>> 0;

                          );
                        }
                      } while (0)
                    } while (
                      (ic(b, l, (0 | (F = (s - l) | 0)) < (0 | k) ? F : k),
                      ((o = (o + 4) | 0) >>> 0 < g >>> 0) &
                        (-1 < (0 | (k = (k - F) | 0))))
                    )
                  }
                  qc(b, 48, (k + 18) | 0, 18, 0), ic(b, u, (E - u) | 0)
                }
                qc(b, 32, f, j, 8192 ^ h)
              }
            } while (0)
            return (S = H), 0 | ((0 | j) < (0 | f) ? f : j)
          }
          function gc(b, d, e) {
            ;(b |= 0), (d |= 0), (e |= 0)
            var h,
              i,
              j,
              k,
              l,
              n,
              o,
              f = 0,
              g = 0,
              p = S,
              m = (S = (S + 63) & -64)
            for (
              S = (S + 224) | 0,
                l = (208 + m) | 0,
                n = (80 + m) | 0,
                g = ((f = o = (160 + m) | 0) + 40) | 0;
              (0 | (f = (f + 4) | (c[f >> 2] = 0))) < (0 | g);

            );
            ;(c[l >> 2] = c[e >> 2]),
              0 <= (0 | hc(0, d, l, n, o)) &&
                ((k = 32 & (e = 0 | c[b >> 2])),
                (0 | a[(b + 74) >> 0]) < 1 && (c[b >> 2] = -33 & e),
                0 | c[(g = (b + 48) | 0) >> 2]
                  ? hc(b, d, l, n, o)
                  : ((e = 0 | c[(f = (b + 44) | 0) >> 2]),
                    (c[f >> 2] = m),
                    (c[(h = (b + 28) | 0) >> 2] = m),
                    (c[(j = (b + 20) | 0) >> 2] = m),
                    (c[g >> 2] = 80),
                    (c[(i = (b + 16) | 0) >> 2] = 80 + m),
                    hc(b, d, l, n, o),
                    0 | e &&
                      (X[3 & c[(b + 36) >> 2]](b, 0, 0),
                      (c[f >> 2] = e),
                      (c[g >> 2] = 0),
                      (c[i >> 2] = 0),
                      (c[h >> 2] = 0),
                      (c[j >> 2] = 0))),
                (c[b >> 2] = c[b >> 2] | k)),
              (S = p)
          }
          function hc(d, e, f, h, i) {
            ;(d |= 0), (f |= 0), (h |= 0), (i |= 0)
            var v,
              w,
              x,
              y,
              A,
              B,
              D,
              E,
              j = 0,
              k = 0,
              l = 0,
              m = 0,
              n = 0,
              o = 0,
              p = 0,
              q = 0,
              r = 0,
              s = 0,
              t = 0,
              u = 0,
              G = 0,
              F = S,
              C = (S = (S + 63) & -64)
            ;(S = (S + 64) | 0),
              (D = (56 + C) | 0),
              (B = (40 + C) | 0),
              (E = (48 + (w = C)) | 0),
              (C = (60 + C) | 0),
              (c[D >> 2] = e |= 0),
              (A = 0 != (0 | d)),
              (y = v = (40 + w) | 0),
              (w = (39 + w) | 0),
              (x = (4 + E) | 0),
              (m = j = e = 0)
            a: for (;;) {
              do {
                do {
                  if (-1 < (0 | e)) {
                    if (((2147483647 - e) | 0) < (0 | j)) {
                      ;(c[1026] = 61), (e = -1)
                      break
                    }
                    e = (j + e) | 0
                    break
                  }
                } while (0)
                if (
                  ((p = 0 | c[D >> 2]), !(((j = 0 | a[p >> 0]) << 24) >> 24))
                ) {
                  u = 91
                  break a
                }
                k = p
                b: for (;;) {
                  switch ((j << 24) >> 24) {
                    case 37:
                      u = 10
                      break b
                    case 0:
                      j = k
                      break b
                  }
                  ;(c[D >> 2] = t = (k + 1) | 0), (j = 0 | a[t >> 0]), (k = t)
                }
                c: do {
                  if (10 == (0 | u)) {
                    ;(u = 0), (j = l = k)
                    do {
                      if (37 != (0 | a[(l + 1) >> 0])) break c
                    } while (
                      ((j = (j + 1) | 0),
                      (c[D >> 2] = l = (l + 2) | 0),
                      37 == (0 | a[l >> 0]))
                    )
                  }
                } while (0)
              } while (((j = (j - p) | 0), A && ic(d, p, j), 0 != (0 | j)))
              if (
                ((l = 0 | c[D >> 2]),
                (o =
                  0 | jc((j = 0 | a[(l + 1) >> 0]))
                    ? ((k = (o = 36 == (0 | a[(l + 2) >> 0])) ? 3 : 1),
                      (r = o ? (j + -48) | 0 : -1),
                      o ? 1 : m)
                    : ((r = -(k = 1)), m)),
                (c[D >> 2] = k = (l + k) | 0),
                (31 <
                  (l = ((((j = 0 | a[k >> 0]) << 24) >> 24) - 32) | 0) >>> 0) |
                  (0 == (((1 << l) & 75913) | 0)))
              )
                n = 0
              else
                for (j = 0; ; ) {
                  if (
                    ((m = (1 << l) | j),
                    (c[D >> 2] = k = (k + 1) | 0),
                    (31 <
                      (l = ((((j = 0 | a[k >> 0]) << 24) >> 24) - 32) | 0) >>>
                        0) |
                      (0 == (((1 << l) & 75913) | 0)))
                  ) {
                    n = m
                    break
                  }
                  j = m
                }
              if ((j << 24) >> 24 == 42) {
                if (
                  0 != (0 | jc((j = 0 | a[(l = (k + 1) | 0) >> 0]))) &&
                  36 == (0 | a[(k + 2) >> 0])
                )
                  (c[(i + ((j + -48) << 2)) >> 2] = 10),
                    (m = 1),
                    (j = (k + 3) | 0),
                    (k = 0 | c[(h + (((0 | a[l >> 0]) - 48) << 3)) >> 2])
                else {
                  if (0 | o) {
                    e = -1
                    break
                  }
                  A
                    ? ((m = (3 + (0 | c[f >> 2])) & -4),
                      (k = 0 | c[m >> 2]),
                      (c[f >> 2] = m + 4),
                      (m = 0),
                      (j = l))
                    : ((j = l), (k = m = 0))
                }
                ;(l = c[D >> 2] = j),
                  (q = (s = (0 | k) < 0) ? 8192 | n : n),
                  (t = m),
                  (s = s ? (0 - k) | 0 : k)
              } else {
                if ((0 | (j = 0 | kc(D))) < 0) {
                  e = -1
                  break
                }
                ;(l = 0 | c[D >> 2]), (q = n), (t = o), (s = j)
              }
              do {
                if (46 == (0 | a[l >> 0])) {
                  if (42 != (0 | a[(j = (l + 1) | 0) >> 0])) {
                    ;(c[D >> 2] = j), (n = 0 | kc(D)), (j = 0 | c[D >> 2])
                    break
                  }
                  if (
                    0 | jc((k = 0 | a[(j = (l + 2) | 0) >> 0])) &&
                    36 == (0 | a[(l + 3) >> 0])
                  ) {
                    ;(c[(i + ((k + -48) << 2)) >> 2] = 10),
                      (n = 0 | c[(h + (((0 | a[j >> 0]) - 48) << 3)) >> 2]),
                      (c[D >> 2] = j = (l + 4) | 0)
                    break
                  }
                  if (0 | t) {
                    e = -1
                    break a
                  }
                  A
                    ? ((o = (3 + (0 | c[f >> 2])) & -4),
                      (k = 0 | c[o >> 2]),
                      (c[f >> 2] = o + 4))
                    : (k = 0),
                    (c[D >> 2] = j),
                    (n = k)
                } else (j = l), (n = -1)
              } while (0)
              for (o = 0; ; ) {
                if (57 < (((0 | a[j >> 0]) - 65) | 0) >>> 0) {
                  e = -1
                  break a
                }
                if (
                  ((c[D >> 2] = k = (j + 1) | 0),
                  !(
                    (((m =
                      255 &
                      (l =
                        0 |
                        a[
                          ((0 | a[j >> 0]) - 65 + (16 + ((58 * o) | 0))) >> 0
                        ])) +
                      -1) |
                      0) >>>
                      0 <
                    8
                  ))
                )
                  break
                ;(j = k), (o = m)
              }
              if (!((l << 24) >> 24)) {
                e = -1
                break
              }
              k = -1 < (0 | r)
              do {
                if ((l << 24) >> 24 == 19) {
                  if (k) {
                    e = -1
                    break a
                  }
                  u = 52
                } else {
                  if (k) {
                    ;(c[(i + (r << 2)) >> 2] = m),
                      (r = 0 | c[((m = (h + (r << 3)) | 0) + 4) >> 2]),
                      (c[(u = B) >> 2] = c[m >> 2]),
                      (c[(u + 4) >> 2] = r),
                      (u = 52)
                    break
                  }
                  if (!A) {
                    e = 0
                    break a
                  }
                  lc(B, m, f), (u = 53)
                }
              } while (0)
              52 == (0 | u) && ((u = 0), A ? (u = 53) : (j = 0))
              d: do {
                if (53 == (0 | u)) {
                  ;(l =
                    ((u = 0) != (0 | o)) &
                    (3 == ((15 & (l = 0 | a[j >> 0])) | 0))
                      ? -33 & l
                      : l),
                    (j = -65537 & q),
                    (r = 0 == ((8192 & q) | 0) ? q : j)
                  e: do {
                    switch (0 | l) {
                      case 110:
                        switch (((255 & o) << 24) >> 24) {
                          case 0:
                          case 1:
                            ;(c[c[B >> 2] >> 2] = e), (j = 0)
                            break d
                          case 2:
                            ;(j = 0 | c[B >> 2]),
                              (c[j >> 2] = e),
                              (c[(j + 4) >> 2] = (((0 | e) < 0) << 31) >> 31),
                              (j = 0)
                            break d
                          case 3:
                            ;(b[c[B >> 2] >> 1] = e), (j = 0)
                            break d
                          case 4:
                            ;(a[c[B >> 2] >> 0] = e), (j = 0)
                            break d
                          case 6:
                            ;(c[c[B >> 2] >> 2] = e), (j = 0)
                            break d
                          case 7:
                            ;(j = 0 | c[B >> 2]),
                              (c[j >> 2] = e),
                              (c[(j + 4) >> 2] = (((0 | e) < 0) << 31) >> 31),
                              (j = 0)
                            break d
                          default:
                            j = 0
                            break d
                        }
                      case 112:
                        ;(j = 8 | r),
                          (k = 8 < n >>> 0 ? n : 8),
                          (m = 120),
                          (u = 65)
                        break
                      case 88:
                      case 120:
                        ;(j = r), (k = n), (m = l), (u = 65)
                        break
                      case 111:
                        ;(n =
                          (0 == ((8 & (j = r)) | 0)) |
                          ((0 |
                            (l =
                              (y -
                                (o =
                                  0 |
                                  (function (b, c, d) {
                                    if (
                                      ((d |= 0),
                                      !(
                                        (0 == (0 | (b |= 0))) &
                                        (0 == (0 | (c |= 0)))
                                      ))
                                    )
                                      for (
                                        ;
                                        (a[(d = (d + -1) | 0) >> 0] =
                                          (7 & b) | 48),
                                          (b = 0 | Wc(0 | b, 0 | c, 3)),
                                          (c = 0 | z()),
                                          !((0 == (0 | b)) & (0 == (0 | c)));

                                      );
                                    return 0 | d
                                  })(
                                    (p = 0 | c[(q = B) >> 2]),
                                    (q = 0 | c[(q + 4) >> 2]),
                                    v
                                  ))) |
                              0)) <
                            (0 | n))
                            ? n
                            : (l + 1) | 0),
                          (l = 0),
                          (k = 2938),
                          (u = 71)
                        break
                      case 105:
                      case 100:
                        if (
                          ((j = 0 | c[(k = B) >> 2]),
                          (0 | (k = 0 | c[(k + 4) >> 2])) < 0)
                        ) {
                          ;(j = 0 | Sc(0, 0, 0 | j, 0 | k)),
                            (k = 0 | z()),
                            (c[(l = B) >> 2] = j),
                            (c[(l + 4) >> 2] = k),
                            (l = 1),
                            (m = 2938),
                            (u = 70)
                          break e
                        }
                        ;(l = (0 != ((2049 & r) | 0)) & 1),
                          (m =
                            0 == ((2048 & r) | 0)
                              ? 0 == ((1 & r) | 0)
                                ? 2938
                                : 2940
                              : 2939),
                          (u = 70)
                        break e
                      case 117:
                        ;(j = 0 | c[(k = B) >> 2]),
                          (k = 0 | c[(k + 4) >> 2]),
                          (l = 0),
                          (m = 2938),
                          (u = 70)
                        break
                      case 99:
                        ;(a[w >> 0] = c[B >> 2]),
                          (p = w),
                          (o = j),
                          (m = 1),
                          (l = 0),
                          (k = 2938),
                          (j = y)
                        break
                      case 115:
                        ;(p = q = 0 == (0 | (q = 0 | c[B >> 2])) ? 2948 : q),
                          (o = j),
                          (m = (G = 0 == (0 | (r = 0 | pc(q, n))))
                            ? n
                            : (r - q) | 0),
                          (l = 0),
                          (k = 2938),
                          (j = G ? (q + n) | 0 : r)
                        break
                      case 67:
                        ;(c[E >> 2] = c[B >> 2]),
                          (c[x >> 2] = 0),
                          (l = c[B >> 2] = E),
                          (n = -1),
                          (u = 78)
                        break
                      case 83:
                        if (n) {
                          ;(l = 0 | c[B >> 2]), (u = 78)
                          break e
                        }
                        qc(d, 32, s, 0, r), (j = 0), (u = 88)
                        break e
                      case 65:
                      case 71:
                      case 70:
                      case 69:
                      case 97:
                      case 103:
                      case 102:
                      case 101:
                        j = 0 | ec(d, +g[B >> 3], s, n, r, l)
                        break d
                      default:
                        ;(o = r), (m = n), (l = 0), (k = 2938), (j = y)
                    }
                  } while (0)
                  f: do {
                    if (65 == (0 | u))
                      (o =
                        0 |
                        mc(
                          (p = 0 | c[(q = B) >> 2]),
                          (q = 0 | c[(q + 4) >> 2]),
                          v,
                          32 & m
                        )),
                        (n = k),
                        (l = (G =
                          (0 == ((8 & j) | 0)) |
                          ((0 == (0 | p)) & (0 == (0 | q))))
                          ? 0
                          : 2),
                        (k = G ? 2938 : (2938 + (m >>> 4)) | 0),
                        (u = 71)
                    else if (70 == (0 | u))
                      (o = 0 | oc((p = j), (q = k), v)),
                        (j = r),
                        (k = m),
                        (u = 71)
                    else if (78 == (0 | u)) {
                      for (j = u = 0, o = l; ; ) {
                        if (!(k = 0 | c[o >> 2])) break
                        if (
                          (m = (0 | (k = 0 | rc(C, k))) < 0) |
                          (((n - j) | 0) >>> 0 < k >>> 0)
                        ) {
                          u = 82
                          break
                        }
                        if (!((j = (k + j) | 0) >>> 0 < n >>> 0)) break
                        o = (o + 4) | 0
                      }
                      if (82 == (0 | u) && ((u = 0), m)) {
                        e = -1
                        break a
                      }
                      if ((qc(d, 32, s, j, r), j))
                        for (m = 0; ; ) {
                          if (!(k = 0 | c[l >> 2])) {
                            u = 88
                            break f
                          }
                          if (
                            (0 | j) <
                            (0 | (m = ((k = 0 | rc(C, k)) + m) | 0))
                          ) {
                            u = 88
                            break f
                          }
                          if ((ic(d, C, k), j >>> 0 <= m >>> 0)) {
                            u = 88
                            break
                          }
                          l = (l + 4) | 0
                        }
                      else (j = 0), (u = 88)
                    }
                  } while (0)
                  if (71 == (0 | u))
                    (G =
                      ((u = 0) != (0 | n)) |
                      (m = (0 != (0 | p)) | (0 != (0 | q)))),
                      (m = (y - o + (1 & (1 ^ m))) | 0),
                      (p = G ? o : v),
                      (o = -1 < (0 | n) ? -65537 & j : j),
                      (m = G ? ((0 | m) < (0 | n) ? n : m) : 0),
                      (j = y)
                  else if (88 == (0 | u)) {
                    ;(u = 0),
                      qc(d, 32, s, j, 8192 ^ r),
                      (j = (0 | j) < (0 | s) ? s : j)
                    break
                  }
                  qc(
                    d,
                    32,
                    (j =
                      (0 | s) <
                      (0 |
                        (G =
                          ((q = (0 | m) < (0 | (r = (j - p) | 0)) ? r : m) +
                            l) |
                          0))
                        ? G
                        : s),
                    G,
                    o
                  ),
                    ic(d, k, l),
                    qc(d, 48, j, G, 65536 ^ o),
                    qc(d, 48, q, r, 0),
                    ic(d, p, r),
                    qc(d, 32, j, G, 8192 ^ o)
                }
              } while (0)
              m = t
            }
            g: do {
              if (91 == (0 | u) && !d)
                if (m) {
                  for (e = 1; ; ) {
                    if (!(j = 0 | c[(i + (e << 2)) >> 2])) break
                    if (
                      (lc((h + (e << 3)) | 0, j, f),
                      10 <= (e = (e + 1) | 0) >>> 0)
                    ) {
                      e = 1
                      break g
                    }
                  }
                  for (j = 0; ; ) {
                    if (((e = (e + 1) | 0), 0 | j)) {
                      e = -1
                      break g
                    }
                    if (10 <= e >>> 0) {
                      e = 1
                      break g
                    }
                    j = 0 | c[(i + (e << 2)) >> 2]
                  }
                } else e = 0
            } while (0)
            return (S = F), 0 | e
          }
          function ic(a, b, d) {
            ;(b |= 0), (d |= 0), 32 & c[(a |= 0) >> 2] || tc(b, d, a)
          }
          function jc(a) {
            return ((((a |= 0) + -48) | 0) >>> 0 < 10) | 0
          }
          function kc(b) {
            var d = 0,
              e = 0,
              f = 0,
              e = 0 | c[(b |= 0) >> 2]
            if (0 | jc(((d = 0 | a[e >> 0]) << 24) >> 24))
              for (
                f = d, d = 0;
                (d = (((10 * d) | 0) - 48 + ((f << 24) >> 24)) | 0),
                  (c[b >> 2] = e = (e + 1) | 0),
                  0 != (0 | jc(((f = 0 | a[e >> 0]) << 24) >> 24));

              );
            else d = 0
            return 0 | d
          }
          function lc(a, b, d) {
            ;(a |= 0), (b |= 0), (d |= 0)
            var h,
              e = 0,
              f = 0
            a: do {
              if (b >>> 0 <= 20) {
                switch (0 | b) {
                  case 9:
                    ;(e = (3 + (0 | c[d >> 2])) & -4),
                      (b = 0 | c[e >> 2]),
                      (c[d >> 2] = e + 4),
                      (c[a >> 2] = b)
                    break a
                  case 10:
                    ;(e = (3 + (0 | c[d >> 2])) & -4),
                      (b = 0 | c[e >> 2]),
                      (c[d >> 2] = e + 4),
                      (c[(e = a) >> 2] = b),
                      (c[(e + 4) >> 2] = (((0 | b) < 0) << 31) >> 31)
                    break a
                  case 11:
                    ;(e = (3 + (0 | c[d >> 2])) & -4),
                      (b = 0 | c[e >> 2]),
                      (c[d >> 2] = e + 4),
                      (c[(e = a) >> 2] = b),
                      (c[(e + 4) >> 2] = 0)
                    break a
                  case 12:
                    ;(e = (7 + (0 | c[d >> 2])) & -8),
                      (f = 0 | c[(b = e) >> 2]),
                      (b = 0 | c[(b + 4) >> 2]),
                      (c[d >> 2] = e + 8),
                      (c[(e = a) >> 2] = f),
                      (c[(e + 4) >> 2] = b)
                    break a
                  case 13:
                    ;(f = (3 + (0 | c[d >> 2])) & -4),
                      (e = 0 | c[f >> 2]),
                      (c[d >> 2] = f + 4),
                      (c[(f = a) >> 2] = e = ((65535 & e) << 16) >> 16),
                      (c[(f + 4) >> 2] = (((0 | e) < 0) << 31) >> 31)
                    break a
                  case 14:
                    ;(f = (3 + (0 | c[d >> 2])) & -4),
                      (e = 0 | c[f >> 2]),
                      (c[d >> 2] = f + 4),
                      (c[(f = a) >> 2] = 65535 & e),
                      (c[(f + 4) >> 2] = 0)
                    break a
                  case 15:
                    ;(f = (3 + (0 | c[d >> 2])) & -4),
                      (e = 0 | c[f >> 2]),
                      (c[d >> 2] = f + 4),
                      (c[(f = a) >> 2] = e = ((255 & e) << 24) >> 24),
                      (c[(f + 4) >> 2] = (((0 | e) < 0) << 31) >> 31)
                    break a
                  case 16:
                    ;(f = (3 + (0 | c[d >> 2])) & -4),
                      (e = 0 | c[f >> 2]),
                      (c[d >> 2] = f + 4),
                      (c[(f = a) >> 2] = 255 & e),
                      (c[(f + 4) >> 2] = 0)
                    break a
                  case 17:
                    ;(f = (7 + (0 | c[d >> 2])) & -8),
                      (h = +g[f >> 3]),
                      (c[d >> 2] = f + 8),
                      (g[a >> 3] = h)
                    break a
                  case 18:
                    !(function (a, b) {
                      a |= 0
                      var e = (7 + (0 | c[(b |= 0) >> 2])) & -8,
                        d = +g[e >> 3]
                      ;(c[b >> 2] = 8 + e), (g[a >> 3] = d)
                    })(a, d)
                    break a
                  default:
                    break a
                }
              }
            } while (0)
          }
          function mc(b, c, e, f) {
            if (
              ((e |= 0),
              (f |= 0),
              !((0 == (0 | (b |= 0))) & (0 == (0 | (c |= 0)))))
            )
              for (
                ;
                (a[(e = (e + -1) | 0) >> 0] = 0 | d[(480 + (15 & b)) >> 0] | f),
                  !(
                    (0 == (0 | (b = 0 | Wc(0 | b, 0 | c, 4)))) &
                    (0 == (0 | (c = 0 | z())))
                  );

              );
            return 0 | e
          }
          function oc(b, c, d) {
            d |= 0
            var e,
              f = 0,
              g = 0
            if (
              (0 < (c |= 0) >>> 0) |
              ((0 == (0 | c)) & (4294967295 < (b |= 0) >>> 0))
            )
              for (
                ;
                (g =
                  0 |
                  Rc(
                    0 | (e = b),
                    0 | (f = c),
                    0 |
                      (g =
                        0 |
                        Qc(
                          0 | (b = 0 | Vc(0 | b, 0 | c, 10, 0)),
                          0 | (c = 0 | z()),
                          -10,
                          -1
                        )),
                    0 | z()
                  )),
                  z(),
                  (a[(d = (d + -1) | 0) >> 0] = (255 & g) | 48),
                  (9 < f >>> 0) | ((9 == (0 | f)) & (4294967295 < e >>> 0));

              );
            if (b)
              for (
                ;
                (f =
                  255 &
                  (((g = b) + (0 | v((b = ((b >>> 0) / 10) | 0), -10))) | 48)),
                  (a[(d = (d + -1) | 0) >> 0] = f),
                  10 <= g >>> 0;

              );
            return 0 | d
          }
          function pc(b, d) {
            b |= 0
            var e = 0,
              f = 0,
              e = 0 != (0 | (d |= 0))
            a: do {
              if (e & (0 != ((3 & b) | 0)))
                for (;;) {
                  if (!(0 | a[b >> 0])) break a
                  if (
                    !(
                      (e = 0 != (0 | (d = (d + -1) | 0))) &
                      (0 != ((3 & (b = (b + 1) | 0)) | 0))
                    )
                  ) {
                    f = 5
                    break
                  }
                }
              else f = 5
            } while (0)
            b: do {
              if (5 == (0 | f)) {
                do {
                  if (e) {
                    if (!(0 | a[b >> 0])) {
                      if (d) break b
                      break
                    }
                    c: do {
                      if (3 < d >>> 0)
                        for (;;) {
                          if (
                            (((-2139062144 & (e = 0 | c[b >> 2])) ^
                              -2139062144) &
                              (e + -16843009)) |
                            0
                          )
                            break c
                          if (
                            ((b = (b + 4) | 0), (d = (d + -4) | 0) >>> 0 <= 3)
                          ) {
                            f = 11
                            break
                          }
                        }
                      else f = 11
                    } while (0)
                    if (11 == (0 | f) && !d) break
                    for (;;) {
                      if (!(0 | a[b >> 0])) break b
                      if (!(d = (d + -1) | 0)) break
                      b = (b + 1) | 0
                    }
                  }
                } while (0)
                b = 0
              }
            } while (0)
            return 0 | b
          }
          function qc(a, b, c, d, e) {
            ;(a |= 0), (b |= 0)
            var g = S,
              f = (S = (S + 63) & -64)
            if (
              ((S = (S + 256) | 0),
              ((0 | (d |= 0)) < (0 | (c |= 0))) &
                (0 == ((73728 & (e |= 0)) | 0)))
            ) {
              if (
                ($c(
                  0 | f,
                  ((b << 24) >> 24) | 0,
                  0 | ((e = (c - d) | 0) >>> 0 < 256 ? e : 256)
                ),
                255 < e >>> 0)
              ) {
                for (d = e; ic(a, f, 256), 255 < (d = (d + -256) | 0) >>> 0; );
                e &= 255
              }
              ic(a, f, e)
            }
            S = g
          }
          function rc(a, b) {
            return (b |= 0), 0 | (a = (a |= 0) ? 0 | sc(a, b) : 0)
          }
          function sc(b, d) {
            ;(b |= 0), (d |= 0)
            do {
              if (b) {
                if (d >>> 0 < 128) {
                  ;(a[b >> 0] = d), (b = 1)
                  break
                }
                if (!(0 | c[1020])) {
                  if (57216 == ((-128 & d) | 0)) {
                    ;(a[b >> 0] = d), (b = 1)
                    break
                  }
                  ;(c[1026] = 25), (b = -1)
                  break
                }
                if (d >>> 0 < 2048) {
                  ;(a[b >> 0] = (d >>> 6) | 192),
                    (a[(b + 1) >> 0] = (63 & d) | 128),
                    (b = 2)
                  break
                }
                if ((d >>> 0 < 55296) | (57344 == ((-8192 & d) | 0))) {
                  ;(a[b >> 0] = (d >>> 12) | 224),
                    (a[(b + 1) >> 0] = ((d >>> 6) & 63) | 128),
                    (a[(b + 2) >> 0] = (63 & d) | 128),
                    (b = 3)
                  break
                }
                if (((d + -65536) | 0) >>> 0 < 1048576) {
                  ;(a[b >> 0] = (d >>> 18) | 240),
                    (a[(b + 1) >> 0] = ((d >>> 12) & 63) | 128),
                    (a[(b + 2) >> 0] = ((d >>> 6) & 63) | 128),
                    (a[(b + 3) >> 0] = (63 & d) | 128),
                    (b = 4)
                  break
                }
                ;(c[1026] = 25), (b = -1)
                break
              }
            } while (((b = 1), 0))
            return 0 | b
          }
          function tc(b, d, e) {
            ;(b |= 0), (d |= 0)
            var i,
              f = 0,
              g = 0,
              h = 0
            ;(f = 0 | c[(g = ((e |= 0) + 16) | 0) >> 2])
              ? (h = 5)
              : 0 |
                  (function (b) {
                    var d = 0,
                      e = 0
                    ;(e = 0 | a[(d = (74 + (b |= 0)) | 0) >> 0]),
                      (a[d >> 0] = (255 + e) | e),
                      (d =
                        8 & (d = 0 | c[b >> 2])
                          ? ((c[b >> 2] = 32 | d), -1)
                          : ((c[(b + 8) >> 2] = 0),
                            (c[(b + 4) >> 2] = 0),
                            (d = 0 | c[(b + 44) >> 2]),
                            (c[(b + 28) >> 2] = d),
                            (c[(b + 20) >> 2] = d),
                            (c[(b + 16) >> 2] = d + (0 | c[(b + 48) >> 2])),
                            0))
                    return 0 | d
                  })(e) || ((f = 0 | c[g >> 2]), (h = 5))
            a: do {
              if (5 == (0 | h)) {
                if (
                  ((f - (g = h = 0 | c[(i = (e + 20) | 0) >> 2])) | 0) >>> 0 <
                  d >>> 0
                ) {
                  X[3 & c[(e + 36) >> 2]](e, b, d)
                  break
                }
                b: do {
                  if (((0 | a[(e + 75) >> 0]) < 0) | (0 == (0 | d))) f = d
                  else {
                    for (h = d; ; ) {
                      if (10 == (0 | a[(b + (f = (h + -1) | 0)) >> 0])) break
                      if (!f) {
                        f = d
                        break b
                      }
                      h = f
                    }
                    if ((0 | X[3 & c[(e + 36) >> 2]](e, b, h)) >>> 0 < h >>> 0)
                      break a
                    ;(g = 0 | c[i >> 2]), (f = (d - h) | 0), (b = (b + h) | 0)
                  }
                } while (0)
                Zc(0 | g, 0 | b, 0 | f), (c[i >> 2] = (0 | c[i >> 2]) + f)
              }
            } while (0)
          }
          function vc(a) {
            return (
              (g[h >> 3] = a = +a),
              (a = 0 | c[h >> 2]),
              y(0 | c[(h + 4) >> 2]),
              0 | a
            )
          }
          function wc(a, b) {
            b |= 0
            var e,
              f,
              d = 0
            switch (
              ((g[h >> 3] = a = +a),
              (f =
                0 |
                Wc(0 | (d = 0 | c[h >> 2]), 0 | (e = 0 | c[(h + 4) >> 2]), 52)),
              z(),
              2047 & f)
            ) {
              case 0:
                ;(d =
                  0 != a
                    ? ((a = +wc(0x10000000000000000 * a, b)),
                      ((0 | c[b >> 2]) - 64) | 0)
                    : 0),
                  (c[b >> 2] = d)
                break
              case 2047:
                break
              default:
                ;(c[b >> 2] = (2047 & f) - 1022),
                  (c[h >> 2] = d),
                  (c[(h + 4) >> 2] = (-2146435073 & e) | 1071644672),
                  (a = +g[h >> 3])
            }
            return +a
          }
          function yc(b) {
            var g,
              c = 0,
              e = 0,
              f = 0,
              c = 0 | a[(b |= 0) >> 0]
            a: do {
              if ((c << 24) >> 24)
                for (e = b, f = 4, b = 1052; ; ) {
                  if (
                    !(
                      ((c << 24) >> 24 == ((g = 0 | a[b >> 0]) << 24) >> 24) &
                      (0 != (0 | (f = (f + -1) | 0))) &
                      ((g << 24) >> 24 != 0)
                    )
                  )
                    break a
                  if (
                    ((b = (b + 1) | 0),
                    !(((c = 0 | a[(e = (e + 1) | 0) >> 0]) << 24) >> 24))
                  ) {
                    c = 0
                    break
                  }
                }
              else (c = 0), (b = 1052)
            } while (0)
            return ((255 & c) - (0 | d[b >> 0])) | 0
          }
          function Ac(a) {
            var b
            return (
              0 | (0 == (0 | (b = 0 | pc((a |= 0), 64))) ? 64 : (b - a) | 0)
            )
          }
          function Cc(a, b, d) {
            ;(b |= 0), (d |= 0)
            var g,
              h,
              e = 0,
              f = 0,
              j = S,
              i = (S = (S + 63) & -64)
            ;(S = (S + 240) | 0), (c[i >> 2] = a |= 0)
            a: do {
              if (1 < (0 | b))
                for (f = e = a, a = 1; ; ) {
                  if (
                    -1 <
                      (0 |
                        oa(
                          e,
                          (g =
                            ((f = (f + -4) | 0) +
                              (0 -
                                (0 |
                                  c[(d + ((h = (b + -2) | 0) << 2)) >> 2]))) |
                            0)
                        )) &&
                    -1 < (0 | oa(e, f))
                  )
                    break a
                  if (
                    ((e = (i + (a << 2)) | 0),
                    (a = (a + 1) | 0),
                    (0 |
                      (b =
                        -1 < (0 | oa(g, f))
                          ? ((f = c[e >> 2] = g), (b + -1) | 0)
                          : ((c[e >> 2] = f), h))) <=
                      1)
                  )
                    break a
                  e = 0 | c[i >> 2]
                }
              else a = 1
            } while (0)
            Ic(i, a), (S = j)
          }
          function Dc(a, b) {
            var d = 0,
              e = 0,
              f = ((a |= 0) + 4) | 0
            31 < (b |= 0) >>> 0
              ? ((d = 0 | c[f >> 2]),
                (c[a >> 2] = d),
                (b = (b + -32) | (e = c[f >> 2] = 0)))
              : ((d = 0 | c[a >> 2]), (e = 0 | c[f >> 2])),
              (c[a >> 2] = (e << (32 - b)) | (b ? d >>> b : d)),
              (c[f >> 2] = b ? e >>> b : e)
          }
          function Ec(a, b, d, e, f, g) {
            ;(a |= 0), (d |= 0), (e |= 0), (f |= 0), (g |= 0)
            var j,
              k,
              h = 0,
              i = 0,
              m = S,
              l = (S = (S + 63) & -64)
            ;(S = (S + 240) | 0),
              (c[(k = (232 + l) | 0) >> 2] = b |= 0),
              (c[(j = (4 + k) | 0) >> 2] = d),
              (c[l >> 2] = a)
            a: do {
              if (
                (1 != (0 | b)) | (0 != (0 | d)) &&
                ((h = (a + (0 - (0 | c[(g + (e << 2)) >> 2]))) | 0),
                1 <= (0 | oa(h, a)))
              )
                for (b = h, i = 1, h = 0 == (0 | f); ; ) {
                  if (h & (1 < (0 | e))) {
                    if (-1 < (0 | oa((h = (a + -4) | 0), b))) {
                      ;(b = a), (h = i), (d = 10)
                      break a
                    }
                    if (
                      -1 <
                      (0 |
                        oa(
                          (h + (0 - (0 | c[(g + ((e + -2) << 2)) >> 2]))) | 0,
                          b
                        ))
                    ) {
                      ;(b = a), (h = i), (d = 10)
                      break a
                    }
                  }
                  if (
                    ((d = (i + 1) | 0),
                    (c[(l + (i << 2)) >> 2] = b),
                    Dc(k, (f = 0 | Gc(k))),
                    (e = (f + e) | 0),
                    !((1 != (0 | c[k >> 2])) | (0 != (0 | c[j >> 2]))))
                  ) {
                    ;(h = d), (d = 10)
                    break a
                  }
                  if (
                    (0 |
                      oa(
                        (h = (b + (0 - (0 | c[(g + (e << 2)) >> 2]))) | 0),
                        0 | c[l >> 2]
                      )) <
                    1
                  ) {
                    ;(h = d), (d = 10)
                    break
                  }
                  ;(a = b), (b = h), (i = d), (h = 1)
                }
              else d = 9
            } while (0)
            9 == (0 | d) && 0 == (0 | f) && ((b = a), (h = 1), (d = 10)),
              10 == (0 | d) && (Ic(l, h), Cc(b, e, g)),
              (S = m)
          }
          function Fc(a, b) {
            var d = 0,
              e = 0,
              f = ((a |= 0) + 4) | 0
            31 < (b |= 0) >>> 0
              ? ((d = 0 | c[a >> 2]),
                (c[f >> 2] = d),
                (b = (b + -32) | (e = c[a >> 2] = 0)))
              : ((d = 0 | c[f >> 2]), (e = 0 | c[a >> 2])),
              (c[f >> 2] = ((f = (32 - b) | 0) ? e >>> f : e) | (d << b)),
              (c[a >> 2] = e << b)
          }
          function Gc(a) {
            var b
            return (b = 0 | Hc(((0 | c[(a |= 0) >> 2]) - 1) | 0))
              ? 0 | b
              : 0 |
                  (0 == (0 | (a = 0 | Hc(0 | c[(a + 4) >> 2])))
                    ? 0
                    : (a + 32) | 0)
          }
          function Hc(a) {
            var b = 0
            if ((a |= 0))
              if (1 & a) b = 0
              else
                for (b = 0; ; ) {
                  if (((b = (b + 1) | 0), 2 & a)) break
                  a >>>= 1
                }
            else b = 32
            return 0 | b
          }
          function Ic(a, b) {
            a |= 0
            var f,
              d = 0,
              e = S,
              d = (S = (S + 63) & -64)
            if (((S = (S + 256) | 0), 2 <= (0 | (b |= 0))))
              for (
                Zc(0 | (c[(a + (b << 2)) >> 2] = d), 0 | c[a >> 2], 4), d = 0;
                Zc(
                  0 | c[(f = (a + (d << 2)) | 0) >> 2],
                  0 | c[(a + ((d = (d + 1) | 0) << 2)) >> 2],
                  4
                ),
                  (c[f >> 2] = 4 + (0 | c[f >> 2])),
                  (0 | d) != (0 | b);

              );
            S = e
          }
          function Jc(a) {
            a |= 0
            var b = 0,
              d = 0,
              e = 0,
              f = 0,
              g = 0,
              h = 0,
              i = 0,
              j = 0,
              k = 0,
              l = 0,
              m = 0,
              n = 0,
              o = 0,
              p = 0,
              q = 0,
              r = 0,
              s = 0,
              t = 0,
              u = 0,
              v = 0,
              w = S,
              n = (S = (S + 63) & -64)
            S = (S + 16) | 0
            do {
              if (a >>> 0 < 245) {
                if (
                  ((m = 0 | c[1027]),
                  (3 &
                    (d = (a = (k = a >>> 0 < 11 ? 16 : (a + 11) & -8) >>> 3)
                      ? m >>> a
                      : m)) |
                    0)
                )
                  return (
                    (a =
                      0 |
                      c[
                        (b =
                          ((f =
                            (4148 +
                              (((e = (((1 & d) ^ 1) + a) | 0) << 1) << 2)) |
                            0) +
                            8) |
                          0) >> 2
                      ]),
                    (0 | (d = 0 | c[(g = (a + 8) | 0) >> 2])) == (0 | f)
                      ? (c[1027] = m & ~(1 << e))
                      : ((c[(d + 12) >> 2] = f), (c[b >> 2] = d)),
                    (c[(a + 4) >> 2] = 3 | (v = e << 3)),
                    (c[(v = (a + v + 4) | 0) >> 2] = 1 | c[v >> 2]),
                    (S = w),
                    0 | (v = g)
                  )
                if ((l = 0 | c[1029]) >>> 0 < k >>> 0) {
                  if (0 | d)
                    return (
                      (g =
                        0 |
                        c[
                          (b =
                            ((d =
                              (4148 +
                                (((e =
                                  (((a =
                                    ((e = (i =
                                      ((e =
                                        (((e =
                                          (d << a) & ((e = 2 << a) | (0 - e))) &
                                          (0 - e)) -
                                          1) |
                                        0) >>>
                                        12) &
                                      16)
                                      ? e >>> i
                                      : e) >>>
                                      5) &
                                    8) |
                                    i |
                                    (g = ((e = a ? e >>> a : e) >>> 2) & 4) |
                                    (b = ((e = g ? e >>> g : e) >>> 1) & 2) |
                                    (d = ((e = b ? e >>> b : e) >>> 1) & 1)) +
                                    (d ? e >>> d : e)) |
                                  0) <<
                                  1) <<
                                  2)) |
                              0) +
                              8) |
                            0) >> 2
                        ]),
                      (0 | (a = 0 | c[(i = (g + 8) | 0) >> 2])) == (0 | d)
                        ? (c[1027] = a = m & ~(1 << e))
                        : ((c[(a + 12) >> 2] = d), (c[b >> 2] = a), (a = m)),
                      (h = ((v = e << 3) - k) | 0),
                      (c[(g + 4) >> 2] = 3 | k),
                      (c[((f = (g + k) | 0) + 4) >> 2] = 1 | h),
                      (c[(g + v) >> 2] = h),
                      0 | l &&
                        ((e = 0 | c[1032]),
                        (d = (4148 + (((b = l >>> 3) << 1) << 2)) | 0),
                        (a =
                          a & (b = 1 << b)
                            ? 0 | c[(b = a = (d + 8) | 0) >> 2]
                            : ((c[1027] = a | b), (b = (d + 8) | 0), d)),
                        (c[b >> 2] = e),
                        (c[(a + 12) >> 2] = e),
                        (c[(e + 8) >> 2] = a),
                        (c[(e + 12) >> 2] = d)),
                      (c[1029] = h),
                      (c[1032] = f),
                      (S = w),
                      0 | (v = i)
                    )
                  if ((g = 0 | c[1028])) {
                    for (
                      j =
                        0 |
                        c[
                          (4412 +
                            ((((e =
                              ((j = (f =
                                ((j = ((g & (0 - g)) - 1) | 0) >>> 12) & 16)
                                ? j >>> f
                                : j) >>>
                                5) &
                              8) |
                              f |
                              (h = ((j = e ? j >>> e : j) >>> 2) & 4) |
                              (d = ((j = h ? j >>> h : j) >>> 1) & 2) |
                              (i = ((j = d ? j >>> d : j) >>> 1) & 1)) +
                              (i ? j >>> i : j)) <<
                              2)) >>
                            2
                        ],
                        i = ((-8 & c[(j + 4) >> 2]) - k) | 0,
                        d = j;
                      ;

                    ) {
                      if (
                        !(a = 0 | c[(d + 16) >> 2]) &&
                        !(a = 0 | c[(d + 20) >> 2])
                      )
                        break
                      ;(i = (h =
                        (d = ((-8 & c[(a + 4) >> 2]) - k) | 0) >>> 0 < i >>> 0)
                        ? d
                        : i),
                        (d = a),
                        (j = h ? a : j)
                    }
                    if (j >>> 0 < (h = (j + k) | 0) >>> 0) {
                      ;(f = 0 | c[(j + 24) >> 2]), (b = 0 | c[(j + 12) >> 2])
                      do {
                        if ((0 | b) == (0 | j)) {
                          if (
                            !(b = 0 | c[(a = (j + 20) | 0) >> 2]) &&
                            !(b = 0 | c[(a = (j + 16) | 0) >> 2])
                          ) {
                            d = 0
                            break
                          }
                          for (;;)
                            if ((d = 0 | c[(e = (b + 20) | 0) >> 2]))
                              (b = d), (a = e)
                            else {
                              if (!(d = 0 | c[(e = (b + 16) | 0) >> 2])) break
                              ;(b = d), (a = e)
                            }
                          ;(c[a >> 2] = 0), (d = b)
                        } else
                          (d = 0 | c[(j + 8) >> 2]),
                            (c[(d + 12) >> 2] = b),
                            (c[(b + 8) >> 2] = d),
                            (d = b)
                      } while (0)
                      do {
                        if (0 | f) {
                          if (
                            ((b = 0 | c[(j + 28) >> 2]),
                            (0 | j) ==
                              (0 | c[(a = (4412 + (b << 2)) | 0) >> 2]))
                          ) {
                            if (!(c[a >> 2] = d)) {
                              c[1028] = g & ~(1 << b)
                              break
                            }
                          } else if (
                            !(c[
                              ((0 | c[(v = (f + 16) | 0) >> 2]) == (0 | j)
                                ? v
                                : (f + 20) | 0) >> 2
                            ] = d)
                          )
                            break
                          ;(c[(d + 24) >> 2] = f),
                            0 | (b = 0 | c[(j + 16) >> 2]) &&
                              ((c[(d + 16) >> 2] = b), (c[(b + 24) >> 2] = d)),
                            0 | (b = 0 | c[(j + 20) >> 2]) &&
                              ((c[(d + 20) >> 2] = b), (c[(b + 24) >> 2] = d))
                        }
                      } while (0)
                      return (
                        i >>> 0 < 16
                          ? ((c[(j + 4) >> 2] = 3 | (v = (i + k) | 0)),
                            (c[(v = (j + v + 4) | 0) >> 2] = 1 | c[v >> 2]))
                          : ((c[(j + 4) >> 2] = 3 | k),
                            (c[(h + 4) >> 2] = 1 | i),
                            (c[(h + i) >> 2] = i),
                            0 | l &&
                              ((e = 0 | c[1032]),
                              (d = (4148 + (((b = l >>> 3) << 1) << 2)) | 0),
                              (a =
                                (b = 1 << b) & m
                                  ? 0 | c[(b = a = (d + 8) | 0) >> 2]
                                  : ((c[1027] = b | m), (b = (d + 8) | 0), d)),
                              (c[b >> 2] = e),
                              (c[(a + 12) >> 2] = e),
                              (c[(e + 8) >> 2] = a),
                              (c[(e + 12) >> 2] = d)),
                            (c[1029] = i),
                            (c[1032] = h)),
                        (S = w),
                        0 | (v = (j + 8) | 0)
                      )
                    }
                    m = k
                  } else m = k
                } else m = k
              } else if (a >>> 0 <= 4294967231)
                if (((k = -8 & (a = (a + 11) | 0)), (e = 0 | c[1028]))) {
                  ;(d = (0 - k) | 0),
                    (j = (a >>>= 8)
                      ? 16777215 < k >>> 0
                        ? 31
                        : (1 &
                            ((r =
                              ((j =
                                (14 -
                                  ((i =
                                    ((i =
                                      ((j =
                                        a <<
                                        (m =
                                          ((m = (a + 1048320) | 0) >>> 16) &
                                          8)) +
                                        520192) |
                                      0) >>>
                                      16) &
                                    4) |
                                    m |
                                    (r =
                                      ((r = ((j <<= i) + 245760) | 0) >>> 16) &
                                      2)) +
                                  ((j <<= r) >>> 15)) |
                                0) +
                                7) |
                              0)
                              ? k >>> r
                              : k)) |
                          (j << 1)
                      : 0),
                    (a = 0 | c[(4412 + (j << 2)) >> 2])
                  a: do {
                    if (a)
                      for (
                        h =
                          k << (31 == ((f = 0) | j) ? 0 : (25 - (j >>> 1)) | 0),
                          i = a,
                          a = 0;
                        ;

                      ) {
                        if (
                          (g = ((-8 & c[(i + 4) >> 2]) - k) | 0) >>> 0 <
                          d >>> 0
                        ) {
                          if (!g) {
                            ;(d = 0), (a = f = i), (r = 65)
                            break a
                          }
                          ;(d = g), (a = i)
                        }
                        if (
                          ((f =
                            (0 == (0 | (r = 0 | c[(i + 20) >> 2]))) |
                            ((0 | r) ==
                              (0 |
                                (i = 0 | c[(i + 16 + ((h >>> 31) << 2)) >> 2])))
                              ? f
                              : r),
                          !i)
                        ) {
                          r = 61
                          break
                        }
                        h <<= 1
                      }
                    else (a = f = 0), (r = 61)
                  } while (0)
                  if (61 == (0 | r)) {
                    if ((0 == (0 | f)) & (0 == (0 | a))) {
                      if (!(a = ((a = 2 << j) | (0 - a)) & e)) {
                        m = k
                        break
                      }
                      ;(f =
                        0 |
                        c[
                          (4412 +
                            ((((h =
                              ((f = (i =
                                ((f = ((a & (0 - a)) - 1) | 0) >>> 12) & 16)
                                ? f >>> i
                                : f) >>>
                                5) &
                              8) |
                              i |
                              (j = ((f = h ? f >>> h : f) >>> 2) & 4) |
                              (m = ((f = j ? f >>> j : f) >>> 1) & 2) |
                              (a = ((f = m ? f >>> m : f) >>> 1) & 1)) +
                              (a ? f >>> a : f)) <<
                              2)) >>
                            2
                        ]),
                        (a = 0)
                    }
                    f ? (r = 65) : ((i = d), (g = a))
                  }
                  if (65 == (0 | r))
                    for (;;) {
                      if (
                        ((d = (g =
                          (m = ((-8 & c[(f + 4) >> 2]) - k) | 0) >>> 0 <
                          d >>> 0)
                          ? m
                          : d),
                        (g = g ? f : a),
                        !(a =
                          (a = 0 | c[(f + 16) >> 2]) || 0 | c[(f + 20) >> 2]))
                      ) {
                        i = d
                        break
                      }
                      ;(f = a), (a = g)
                    }
                  if (
                    0 != (0 | g) &&
                    i >>> 0 < (((0 | c[1029]) - k) | 0) >>> 0 &&
                    g >>> 0 < (l = (g + k) | 0) >>> 0
                  ) {
                    ;(h = 0 | c[(g + 24) >> 2]), (b = 0 | c[(g + 12) >> 2])
                    do {
                      if ((0 | b) == (0 | g)) {
                        if (
                          !(b = 0 | c[(a = (g + 20) | 0) >> 2]) &&
                          !(b = 0 | c[(a = (g + 16) | 0) >> 2])
                        ) {
                          b = 0
                          break
                        }
                        for (;;)
                          if ((d = 0 | c[(f = (b + 20) | 0) >> 2]))
                            (b = d), (a = f)
                          else {
                            if (!(d = 0 | c[(f = (b + 16) | 0) >> 2])) break
                            ;(b = d), (a = f)
                          }
                        c[a >> 2] = 0
                      } else
                        (v = 0 | c[(g + 8) >> 2]),
                          (c[(v + 12) >> 2] = b),
                          (c[(b + 8) >> 2] = v)
                    } while (0)
                    do {
                      if (h) {
                        if (
                          ((a = 0 | c[(g + 28) >> 2]),
                          (0 | g) == (0 | c[(d = (4412 + (a << 2)) | 0) >> 2]))
                        ) {
                          if (!(c[d >> 2] = b)) {
                            ;(e &= ~(1 << a)), (c[1028] = e)
                            break
                          }
                        } else if (
                          !(c[
                            ((0 | c[(v = (h + 16) | 0) >> 2]) == (0 | g)
                              ? v
                              : (h + 20) | 0) >> 2
                          ] = b)
                        )
                          break
                        ;(c[(b + 24) >> 2] = h),
                          0 | (a = 0 | c[(g + 16) >> 2]) &&
                            ((c[(b + 16) >> 2] = a), (c[(a + 24) >> 2] = b)),
                          (a = 0 | c[(g + 20) >> 2]) &&
                            ((c[(b + 20) >> 2] = a), (c[(a + 24) >> 2] = b))
                      }
                    } while (0)
                    b: do {
                      if (i >>> 0 < 16)
                        (c[(g + 4) >> 2] = 3 | (v = (i + k) | 0)),
                          (c[(v = (g + v + 4) | 0) >> 2] = 1 | c[v >> 2])
                      else {
                        if (
                          ((c[(g + 4) >> 2] = 3 | k),
                          (c[(l + 4) >> 2] = 1 | i),
                          (b = (c[(l + i) >> 2] = i) >>> 3),
                          i >>> 0 < 256)
                        ) {
                          ;(d = (4148 + ((b << 1) << 2)) | 0),
                            (a =
                              (a = 0 | c[1027]) & (b = 1 << b)
                                ? 0 | c[(b = a = (d + 8) | 0) >> 2]
                                : ((c[1027] = a | b), (b = (d + 8) | 0), d)),
                            (c[b >> 2] = l),
                            (c[(a + 12) >> 2] = l),
                            (c[(l + 8) >> 2] = a),
                            (c[(l + 12) >> 2] = d)
                          break
                        }
                        if (
                          ((b =
                            (4412 +
                              ((d = (b = i >>> 8)
                                ? 16777215 < i >>> 0
                                  ? 31
                                  : (1 &
                                      ((v =
                                        ((d =
                                          (14 -
                                            ((t =
                                              ((t =
                                                ((d =
                                                  b <<
                                                  (u =
                                                    ((u = (b + 1048320) | 0) >>>
                                                      16) &
                                                    8)) +
                                                  520192) |
                                                0) >>>
                                                16) &
                                              4) |
                                              u |
                                              (v =
                                                ((v =
                                                  ((d <<= t) + 245760) | 0) >>>
                                                  16) &
                                                2)) +
                                            ((d <<= v) >>> 15)) |
                                          0) +
                                          7) |
                                        0)
                                        ? i >>> v
                                        : i)) |
                                    (d << 1)
                                : 0) <<
                                2)) |
                            0),
                          (c[(l + 28) >> 2] = d),
                          (c[((a = (l + 16) | 0) + 4) >> 2] = 0),
                          (c[a >> 2] = 0),
                          !(e & (a = 1 << d)))
                        ) {
                          ;(c[1028] = e | a),
                            (c[b >> 2] = l),
                            (c[(l + 24) >> 2] = b),
                            (c[(l + 12) >> 2] = l),
                            (c[(l + 8) >> 2] = l)
                          break
                        }
                        b = 0 | c[b >> 2]
                        c: do {
                          if (((-8 & c[(b + 4) >> 2]) | 0) != (0 | i)) {
                            for (
                              e =
                                i << (31 == (0 | d) ? 0 : (25 - (d >>> 1)) | 0);
                              ;

                            ) {
                              if (
                                !(a =
                                  0 |
                                  c[
                                    (d = (b + 16 + ((e >>> 31) << 2)) | 0) >> 2
                                  ])
                              )
                                break
                              if (((-8 & c[(a + 4) >> 2]) | 0) == (0 | i)) {
                                b = a
                                break c
                              }
                              ;(e <<= 1), (b = a)
                            }
                            ;(c[d >> 2] = l),
                              (c[(l + 24) >> 2] = b),
                              (c[(l + 12) >> 2] = l),
                              (c[(l + 8) >> 2] = l)
                            break b
                          }
                        } while (0)
                        ;(v = 0 | c[(u = (b + 8) | 0) >> 2]),
                          (c[(v + 12) >> 2] = l),
                          (c[u >> 2] = l),
                          (c[(l + 8) >> 2] = v),
                          (c[(l + 12) >> 2] = b),
                          (c[(l + 24) >> 2] = 0)
                      }
                    } while (0)
                    return (S = w), 0 | (v = (g + 8) | 0)
                  }
                  m = k
                } else m = k
              else m = -1
            } while (0)
            if (m >>> 0 <= (d = 0 | c[1029]) >>> 0)
              return (
                (b = 0 | c[1032]),
                15 < (a = (d - m) | 0) >>> 0
                  ? ((c[1032] = v = (b + m) | 0),
                    (c[1029] = a),
                    (c[(v + 4) >> 2] = 1 | a),
                    (c[(b + d) >> 2] = a),
                    (c[(b + 4) >> 2] = 3 | m))
                  : ((c[1029] = 0),
                    (c[1032] = 0),
                    (c[(b + 4) >> 2] = 3 | d),
                    (c[(v = (b + d + 4) | 0) >> 2] = 1 | c[v >> 2])),
                (S = w),
                0 | (v = (b + 8) | 0)
              )
            if (m >>> 0 < (h = 0 | c[1030]) >>> 0)
              return (
                (c[1030] = t = (h - m) | 0),
                (v = 0 | c[1033]),
                (c[1033] = u = (v + m) | 0),
                (c[(u + 4) >> 2] = 1 | t),
                (c[(v + 4) >> 2] = 3 | m),
                (S = w),
                0 | (v = (v + 8) | 0)
              )
            if (
              ((i = (m + 48) | 0),
              (k =
                (g =
                  ((a =
                    0 | c[1145]
                      ? 0 | c[1147]
                      : ((c[1147] = 4096),
                        (c[1146] = 4096),
                        (c[1148] = -1),
                        (c[1149] = -1),
                        (c[1150] = 0),
                        (c[1138] = 0),
                        (c[1145] = (-16 & n) ^ 1431655768),
                        4096)) +
                    (j = (m + 47) | 0)) |
                  0) & (e = (0 - a) | 0)) >>>
                0 <=
                m >>> 0)
            )
              return (S = w), (v = 0) | v
            if (
              0 | (a = 0 | c[1137]) &&
              ((n = ((l = 0 | c[1135]) + k) | 0) >>> 0 <= l >>> 0) |
                (a >>> 0 < n >>> 0)
            )
              return (S = w), (v = 0) | v
            d: do {
              if (4 & c[1138]) (b = 0), (r = 143)
              else {
                d = 0 | c[1033]
                e: do {
                  if (d) {
                    for (f = 4556; ; ) {
                      if (
                        (a = 0 | c[f >> 2]) >>> 0 <= d >>> 0 &&
                        ((a + (0 | c[(q = (f + 4) | 0) >> 2])) | 0) >>> 0 >
                          d >>> 0
                      )
                        break
                      if (!(a = 0 | c[(f + 8) >> 2])) {
                        r = 128
                        break e
                      }
                      f = a
                    }
                    if ((b = (g - h) & e) >>> 0 < 2147483647)
                      if (
                        (0 | (a = 0 | Oc(b))) ==
                        (((0 | c[f >> 2]) + (0 | c[q >> 2])) | 0)
                      ) {
                        if (-1 != (0 | a)) {
                          ;(h = a), (g = b), (r = 145)
                          break d
                        }
                      } else (e = a), (r = 136)
                    else b = 0
                  } else r = 128
                } while (0)
                do {
                  if (128 == (0 | r))
                    if (
                      -1 != (0 | (d = 0 | Oc(0))) &&
                      ((b = d),
                      (p =
                        ((b =
                          ((0 == (((p = ((o = 0 | c[1146]) + -1) | 0) & b) | 0)
                            ? 0
                            : (((p + b) & (0 - o)) - b) | 0) +
                            k) |
                          0) +
                          (o = 0 | c[1135])) |
                        0),
                      (m >>> 0 < b >>> 0) & (b >>> 0 < 2147483647))
                    ) {
                      if (
                        0 | (q = 0 | c[1137]) &&
                        (p >>> 0 <= o >>> 0) | (q >>> 0 < p >>> 0)
                      ) {
                        b = 0
                        break
                      }
                      if ((0 | (a = 0 | Oc(b))) == (0 | d)) {
                        ;(h = d), (g = b), (r = 145)
                        break d
                      }
                      ;(e = a), (r = 136)
                    } else b = 0
                } while (0)
                do {
                  if (136 == (0 | r)) {
                    if (
                      ((d = (0 - b) | 0),
                      !(
                        (b >>> 0 < i >>> 0) &
                        (b >>> 0 < 2147483647) &
                        (-1 != (0 | e))
                      ))
                    ) {
                      if (-1 == (0 | e)) {
                        b = 0
                        break
                      }
                      ;(h = e), (g = b), (r = 145)
                      break d
                    }
                    if (
                      2147483647 <=
                      (a = (j - b + (a = 0 | c[1147])) & (0 - a)) >>> 0
                    ) {
                      ;(h = e), (g = b), (r = 145)
                      break d
                    }
                    if (-1 == (0 | Oc(a))) {
                      Oc(d), (b = 0)
                      break
                    }
                    ;(h = e), (g = (a + b) | 0), (r = 145)
                    break d
                  }
                } while (0)
                ;(c[1138] = 4 | c[1138]), (r = 143)
              }
            } while (0)
            if (
              (143 == (0 | r) &&
                k >>> 0 < 2147483647 &&
                !(
                  (-1 == (0 | (s = 0 | Oc(k)))) |
                  (1 ^
                    (t =
                      ((m + 40) | 0) >>> 0 <
                      (u = ((q = 0 | Oc(0)) - s) | 0) >>> 0)) |
                  (((s >>> 0 < q >>> 0) & (-1 != (0 | s)) & (-1 != (0 | q))) ^
                    1)
                ) &&
                ((h = s), (g = t ? u : b), (r = 145)),
              145 == (0 | r))
            ) {
              ;(b = ((0 | c[1135]) + g) | 0),
                (c[1135] = b) >>> 0 > (0 | c[1136]) >>> 0 && (c[1136] = b),
                (j = 0 | c[1033])
              f: do {
                if (j) {
                  for (f = 4556; ; ) {
                    if (
                      (0 | h) ==
                      (((b = 0 | c[f >> 2]) +
                        (a = 0 | c[(e = (f + 4) | 0) >> 2])) |
                        0)
                    ) {
                      r = 154
                      break
                    }
                    if (!(d = 0 | c[(f + 8) >> 2])) break
                    f = d
                  }
                  if (
                    154 == (0 | r) &&
                    0 == ((8 & c[(f + 12) >> 2]) | 0) &&
                    (j >>> 0 < h >>> 0) & (b >>> 0 <= j >>> 0)
                  ) {
                    ;(c[e >> 2] = a + g),
                      (u =
                        (j +
                          (t =
                            0 == ((7 & (t = (j + 8) | 0)) | 0)
                              ? 0
                              : (0 - t) & 7)) |
                        0),
                      (t = ((v = ((0 | c[1030]) + g) | 0) - t) | 0),
                      (c[1033] = u),
                      (c[1030] = t),
                      (c[(u + 4) >> 2] = 1 | t),
                      (c[(j + v + 4) >> 2] = 40),
                      (c[1034] = c[1149])
                    break
                  }
                  for (
                    h >>> 0 < (0 | c[1031]) >>> 0 && (c[1031] = h),
                      d = (h + g) | 0,
                      a = 4556;
                    ;

                  ) {
                    if ((0 | c[a >> 2]) == (0 | d)) {
                      r = 162
                      break
                    }
                    if (!(b = 0 | c[(a + 8) >> 2])) break
                    a = b
                  }
                  if (162 == (0 | r) && 0 == ((8 & c[(a + 12) >> 2]) | 0)) {
                    ;(c[a >> 2] = h),
                      (c[(l = (a + 4) | 0) >> 2] = (0 | c[l >> 2]) + g),
                      (k =
                        ((l =
                          (h +
                            (0 == ((7 & (l = (h + 8) | 0)) | 0)
                              ? 0
                              : (0 - l) & 7)) |
                          0) +
                          m) |
                        0),
                      (i =
                        ((b =
                          (d +
                            (0 == ((7 & (b = (d + 8) | 0)) | 0)
                              ? 0
                              : (0 - b) & 7)) |
                          0) -
                          l -
                          m) |
                        0),
                      (c[(l + 4) >> 2] = 3 | m)
                    g: do {
                      if ((0 | j) == (0 | b))
                        (v = ((0 | c[1030]) + i) | 0),
                          (c[1030] = v),
                          (c[1033] = k),
                          (c[(k + 4) >> 2] = 1 | v)
                      else {
                        if ((0 | c[1032]) == (0 | b)) {
                          ;(v = ((0 | c[1029]) + i) | 0),
                            (c[1029] = v),
                            (c[1032] = k),
                            (c[(k + 4) >> 2] = 1 | v),
                            (c[(k + v) >> 2] = v)
                          break
                        }
                        if (1 == ((3 & (a = 0 | c[(b + 4) >> 2])) | 0)) {
                          ;(h = -8 & a), (e = a >>> 3)
                          h: do {
                            if (a >>> 0 < 256) {
                              if (
                                ((a = 0 | c[(b + 8) >> 2]),
                                (0 | (d = 0 | c[(b + 12) >> 2])) == (0 | a))
                              ) {
                                c[1027] = c[1027] & ~(1 << e)
                                break
                              }
                              ;(c[(a + 12) >> 2] = d), (c[(d + 8) >> 2] = a)
                              break
                            }
                            ;(g = 0 | c[(b + 24) >> 2]),
                              (a = 0 | c[(b + 12) >> 2])
                            do {
                              if ((0 | a) == (0 | b)) {
                                if (
                                  !(a =
                                    0 |
                                    c[(d = ((e = (b + 16) | 0) + 4) | 0) >> 2])
                                ) {
                                  if (!(a = 0 | c[e >> 2])) {
                                    a = 0
                                    break
                                  }
                                  d = e
                                }
                                for (;;)
                                  if ((e = 0 | c[(f = (a + 20) | 0) >> 2]))
                                    (a = e), (d = f)
                                  else {
                                    if (!(e = 0 | c[(f = (a + 16) | 0) >> 2]))
                                      break
                                    ;(a = e), (d = f)
                                  }
                                c[d >> 2] = 0
                              } else
                                (v = 0 | c[(b + 8) >> 2]),
                                  (c[(v + 12) >> 2] = a),
                                  (c[(a + 8) >> 2] = v)
                            } while (0)
                            if (!g) break
                            e = (4412 + ((d = 0 | c[(b + 28) >> 2]) << 2)) | 0
                            do {
                              if ((0 | c[e >> 2]) == (0 | b)) {
                                if (0 | (c[e >> 2] = a)) break
                                c[1028] = c[1028] & ~(1 << d)
                                break h
                              }
                              if (
                                !(c[
                                  ((0 | c[(v = (g + 16) | 0) >> 2]) == (0 | b)
                                    ? v
                                    : (g + 20) | 0) >> 2
                                ] = a)
                              )
                                break h
                            } while (0)
                          } while (
                            ((c[(a + 24) >> 2] = g),
                            0 | (d = 0 | c[(e = (b + 16) | 0) >> 2]) &&
                              ((c[(a + 16) >> 2] = d), (c[(d + 24) >> 2] = a)),
                            (d = 0 | c[(e + 4) >> 2])) &&
                            ((c[(a + 20) >> 2] = d), (c[(d + 24) >> 2] = a), 0)
                          )
                          ;(b = (b + h) | 0), (f = (h + i) | 0)
                        } else f = i
                        if (
                          ((c[(b = (b + 4) | 0) >> 2] = -2 & c[b >> 2]),
                          (c[(k + 4) >> 2] = 1 | f),
                          (b = (c[(k + f) >> 2] = f) >>> 3),
                          f >>> 0 < 256)
                        ) {
                          ;(d = (4148 + ((b << 1) << 2)) | 0),
                            (a =
                              (a = 0 | c[1027]) & (b = 1 << b)
                                ? 0 | c[(b = a = (d + 8) | 0) >> 2]
                                : ((c[1027] = a | b), (b = (d + 8) | 0), d)),
                            (c[b >> 2] = k),
                            (c[(a + 12) >> 2] = k),
                            (c[(k + 8) >> 2] = a),
                            (c[(k + 12) >> 2] = d)
                          break
                        }
                        b = f >>> 8
                        do {
                          if (b) {
                            if (16777215 < f >>> 0) {
                              e = 31
                              break
                            }
                            e =
                              (1 &
                                ((v =
                                  ((e =
                                    (14 -
                                      ((t =
                                        ((t =
                                          ((e =
                                            b <<
                                            (u =
                                              ((u = (b + 1048320) | 0) >>> 16) &
                                              8)) +
                                            520192) |
                                          0) >>>
                                          16) &
                                        4) |
                                        u |
                                        (v =
                                          ((v = ((e <<= t) + 245760) | 0) >>>
                                            16) &
                                          2)) +
                                      ((e <<= v) >>> 15)) |
                                    0) +
                                    7) |
                                  0)
                                  ? f >>> v
                                  : f)) |
                              (e << 1)
                          } else e = 0
                        } while (0)
                        if (
                          ((a = (4412 + (e << 2)) | 0),
                          (c[(k + 28) >> 2] = e),
                          (c[((b = (k + 16) | 0) + 4) >> 2] = 0),
                          !((b = (c[b >> 2] = 0) | c[1028]) & (d = 1 << e)))
                        ) {
                          ;(c[1028] = b | d),
                            (c[a >> 2] = k),
                            (c[(k + 24) >> 2] = a),
                            (c[(k + 12) >> 2] = k),
                            (c[(k + 8) >> 2] = k)
                          break
                        }
                        b = 0 | c[a >> 2]
                        i: do {
                          if (((-8 & c[(b + 4) >> 2]) | 0) != (0 | f)) {
                            for (
                              e =
                                f << (31 == (0 | e) ? 0 : (25 - (e >>> 1)) | 0);
                              ;

                            ) {
                              if (
                                !(a =
                                  0 |
                                  c[
                                    (d = (b + 16 + ((e >>> 31) << 2)) | 0) >> 2
                                  ])
                              )
                                break
                              if (((-8 & c[(a + 4) >> 2]) | 0) == (0 | f)) {
                                b = a
                                break i
                              }
                              ;(e <<= 1), (b = a)
                            }
                            ;(c[d >> 2] = k),
                              (c[(k + 24) >> 2] = b),
                              (c[(k + 12) >> 2] = k),
                              (c[(k + 8) >> 2] = k)
                            break g
                          }
                        } while (0)
                        ;(v = 0 | c[(u = (b + 8) | 0) >> 2]),
                          (c[(v + 12) >> 2] = k),
                          (c[u >> 2] = k),
                          (c[(k + 8) >> 2] = v),
                          (c[(k + 12) >> 2] = b),
                          (c[(k + 24) >> 2] = 0)
                      }
                    } while (0)
                    return (S = w), 0 | (v = (l + 8) | 0)
                  }
                  for (a = 4556; ; ) {
                    if (
                      (b = 0 | c[a >> 2]) >>> 0 <= j >>> 0 &&
                      j >>> 0 < (v = (b + (0 | c[(a + 4) >> 2])) | 0) >>> 0
                    )
                      break
                    a = 0 | c[(a + 8) >> 2]
                  }
                  for (
                    b =
                      ((a =
                        (a =
                          ((f = (v + -47) | 0) +
                            (0 == ((7 & (a = (f + 8) | 0)) | 0)
                              ? 0
                              : (0 - a) & 7)) |
                          0) >>>
                          0 <
                        (f = (j + 16) | 0) >>> 0
                          ? j
                          : a) +
                        8) |
                      0,
                      u =
                        (h +
                          (t =
                            0 == ((7 & (t = (h + 8) | 0)) | 0)
                              ? 0
                              : (0 - t) & 7)) |
                        0,
                      t = ((d = (g + -40) | 0) - t) | 0,
                      c[1033] = u,
                      c[1030] = t,
                      c[(u + 4) >> 2] = 1 | t,
                      c[(h + d + 4) >> 2] = 40,
                      c[1034] = c[1149],
                      c[(d = (a + 4) | 0) >> 2] = 27,
                      c[b >> 2] = c[1139],
                      c[(b + 4) >> 2] = c[1140],
                      c[(b + 8) >> 2] = c[1141],
                      c[(b + 12) >> 2] = c[1142],
                      c[1139] = h,
                      c[1140] = g,
                      c[1142] = 0,
                      c[1141] = b,
                      b = (a + 24) | 0;
                    (c[(b = ((u = b) + 4) | 0) >> 2] = 7),
                      ((u + 8) | 0) >>> 0 < v >>> 0;

                  );
                  if ((0 | a) != (0 | j)) {
                    if (
                      ((g = (a - j) | 0),
                      (c[d >> 2] = -2 & c[d >> 2]),
                      (c[(j + 4) >> 2] = 1 | g),
                      (b = (c[a >> 2] = g) >>> 3),
                      g >>> 0 < 256)
                    ) {
                      ;(d = (4148 + ((b << 1) << 2)) | 0),
                        (a =
                          (a = 0 | c[1027]) & (b = 1 << b)
                            ? 0 | c[(b = a = (d + 8) | 0) >> 2]
                            : ((c[1027] = a | b), (b = (d + 8) | 0), d)),
                        (c[b >> 2] = j),
                        (c[(a + 12) >> 2] = j),
                        (c[(j + 8) >> 2] = a),
                        (c[(j + 12) >> 2] = d)
                      break
                    }
                    if (
                      ((d =
                        (4412 +
                          ((e = (b = g >>> 8)
                            ? 16777215 < g >>> 0
                              ? 31
                              : (1 &
                                  ((v =
                                    ((e =
                                      (14 -
                                        ((t =
                                          ((t =
                                            ((e =
                                              b <<
                                              (u =
                                                ((u = (b + 1048320) | 0) >>>
                                                  16) &
                                                8)) +
                                              520192) |
                                            0) >>>
                                            16) &
                                          4) |
                                          u |
                                          (v =
                                            ((v = ((e <<= t) + 245760) | 0) >>>
                                              16) &
                                            2)) +
                                        ((e <<= v) >>> 15)) |
                                      0) +
                                      7) |
                                    0)
                                    ? g >>> v
                                    : g)) |
                                (e << 1)
                            : 0) <<
                            2)) |
                        0),
                      (c[(j + 28) >> 2] = e),
                      (c[(j + 20) >> 2] = 0),
                      !((b = (c[f >> 2] = 0) | c[1028]) & (a = 1 << e)))
                    ) {
                      ;(c[1028] = b | a),
                        (c[d >> 2] = j),
                        (c[(j + 24) >> 2] = d),
                        (c[(j + 12) >> 2] = j),
                        (c[(j + 8) >> 2] = j)
                      break
                    }
                    b = 0 | c[d >> 2]
                    j: do {
                      if (((-8 & c[(b + 4) >> 2]) | 0) != (0 | g)) {
                        for (
                          e = g << (31 == (0 | e) ? 0 : (25 - (e >>> 1)) | 0);
                          ;

                        ) {
                          if (
                            !(a =
                              0 |
                              c[(d = (b + 16 + ((e >>> 31) << 2)) | 0) >> 2])
                          )
                            break
                          if (((-8 & c[(a + 4) >> 2]) | 0) == (0 | g)) {
                            b = a
                            break j
                          }
                          ;(e <<= 1), (b = a)
                        }
                        ;(c[d >> 2] = j),
                          (c[(j + 24) >> 2] = b),
                          (c[(j + 12) >> 2] = j),
                          (c[(j + 8) >> 2] = j)
                        break f
                      }
                    } while (0)
                    ;(v = 0 | c[(u = (b + 8) | 0) >> 2]),
                      (c[(v + 12) >> 2] = j),
                      (c[u >> 2] = j),
                      (c[(j + 8) >> 2] = v),
                      (c[(j + 12) >> 2] = b),
                      (c[(j + 24) >> 2] = 0)
                  }
                } else
                  (0 == (0 | (v = 0 | c[1031]))) | (h >>> 0 < v >>> 0) &&
                    (c[1031] = h),
                    (c[1139] = h),
                    (c[1140] = g),
                    (c[1142] = 0),
                    (c[1036] = c[1145]),
                    (c[1035] = -1),
                    (c[1040] = 4148),
                    (c[1039] = 4148),
                    (c[1042] = 4156),
                    (c[1041] = 4156),
                    (c[1044] = 4164),
                    (c[1043] = 4164),
                    (c[1046] = 4172),
                    (c[1045] = 4172),
                    (c[1048] = 4180),
                    (c[1047] = 4180),
                    (c[1050] = 4188),
                    (c[1049] = 4188),
                    (c[1052] = 4196),
                    (c[1051] = 4196),
                    (c[1054] = 4204),
                    (c[1053] = 4204),
                    (c[1056] = 4212),
                    (c[1055] = 4212),
                    (c[1058] = 4220),
                    (c[1057] = 4220),
                    (c[1060] = 4228),
                    (c[1059] = 4228),
                    (c[1062] = 4236),
                    (c[1061] = 4236),
                    (c[1064] = 4244),
                    (c[1063] = 4244),
                    (c[1066] = 4252),
                    (c[1065] = 4252),
                    (c[1068] = 4260),
                    (c[1067] = 4260),
                    (c[1070] = 4268),
                    (c[1069] = 4268),
                    (c[1072] = 4276),
                    (c[1071] = 4276),
                    (c[1074] = 4284),
                    (c[1073] = 4284),
                    (c[1076] = 4292),
                    (c[1075] = 4292),
                    (c[1078] = 4300),
                    (c[1077] = 4300),
                    (c[1080] = 4308),
                    (c[1079] = 4308),
                    (c[1082] = 4316),
                    (c[1081] = 4316),
                    (c[1084] = 4324),
                    (c[1083] = 4324),
                    (c[1086] = 4332),
                    (c[1085] = 4332),
                    (c[1088] = 4340),
                    (c[1087] = 4340),
                    (c[1090] = 4348),
                    (c[1089] = 4348),
                    (c[1092] = 4356),
                    (c[1091] = 4356),
                    (c[1094] = 4364),
                    (c[1093] = 4364),
                    (c[1096] = 4372),
                    (c[1095] = 4372),
                    (c[1098] = 4380),
                    (c[1097] = 4380),
                    (c[1100] = 4388),
                    (c[1099] = 4388),
                    (c[1102] = 4396),
                    (c[1101] = 4396),
                    (u =
                      (h +
                        (t =
                          0 == ((7 & (t = (h + 8) | 0)) | 0)
                            ? 0
                            : (0 - t) & 7)) |
                      0),
                    (t = ((v = (g + -40) | 0) - t) | 0),
                    (c[1033] = u),
                    (c[1030] = t),
                    (c[(u + 4) >> 2] = 1 | t),
                    (c[(h + v + 4) >> 2] = 40),
                    (c[1034] = c[1149])
              } while (0)
              if (m >>> 0 < (b = 0 | c[1030]) >>> 0)
                return (
                  (c[1030] = t = (b - m) | 0),
                  (v = 0 | c[1033]),
                  (c[1033] = u = (v + m) | 0),
                  (c[(u + 4) >> 2] = 1 | t),
                  (c[(v + 4) >> 2] = 3 | m),
                  (S = w),
                  0 | (v = (v + 8) | 0)
                )
            }
            return (c[1026] = 48), (S = w), (v = 0) | v
          }
          function Kc(a) {
            var b = 0,
              d = 0,
              e = 0,
              f = 0,
              g = 0,
              h = 0,
              i = 0,
              j = 0,
              k = 0
            if ((a |= 0)) {
              ;(e = 0 | c[1031]),
                (k =
                  ((d = (a + -8) | 0) + (b = -8 & (a = 0 | c[(a + -4) >> 2]))) |
                  0)
              do {
                if (1 & a) j = i = d
                else {
                  if (((f = 0 | c[d >> 2]), !(3 & a))) return
                  if (
                    ((h = (f + b) | 0), (g = (d + (0 - f)) | 0) >>> 0 < e >>> 0)
                  )
                    return
                  if ((0 | c[1032]) == (0 | g)) {
                    if (3 == ((3 & (a = 0 | c[(b = (k + 4) | 0) >> 2])) | 0))
                      return (
                        (c[1029] = h),
                        (c[b >> 2] = -2 & a),
                        (c[(g + 4) >> 2] = 1 | h),
                        void (c[(g + h) >> 2] = h)
                      )
                    ;(j = i = g), (b = h)
                    break
                  }
                  if (((d = f >>> 3), f >>> 0 < 256)) {
                    if (
                      ((a = 0 | c[(g + 8) >> 2]),
                      (0 | (b = 0 | c[(g + 12) >> 2])) == (0 | a))
                    ) {
                      ;(c[1027] = c[1027] & ~(1 << d)), (j = i = g), (b = h)
                      break
                    }
                    ;(c[(a + 12) >> 2] = b),
                      (c[(b + 8) >> 2] = a),
                      (j = i = g),
                      (b = h)
                    break
                  }
                  ;(f = 0 | c[(g + 24) >> 2]), (a = 0 | c[(g + 12) >> 2])
                  do {
                    if ((0 | a) == (0 | g)) {
                      if (
                        !(a = 0 | c[(b = ((d = (g + 16) | 0) + 4) | 0) >> 2])
                      ) {
                        if (!(a = 0 | c[d >> 2])) {
                          d = 0
                          break
                        }
                        b = d
                      }
                      for (;;)
                        if ((d = 0 | c[(e = (a + 20) | 0) >> 2]))
                          (a = d), (b = e)
                        else {
                          if (!(d = 0 | c[(e = (a + 16) | 0) >> 2])) break
                          ;(a = d), (b = e)
                        }
                      ;(c[b >> 2] = 0), (d = a)
                    } else
                      (d = 0 | c[(g + 8) >> 2]),
                        (c[(d + 12) >> 2] = a),
                        (c[(a + 8) >> 2] = d),
                        (d = a)
                  } while (0)
                  if (f) {
                    if (
                      ((a = 0 | c[(g + 28) >> 2]),
                      (0 | c[(b = (4412 + (a << 2)) | 0) >> 2]) == (0 | g))
                    ) {
                      if (!(c[b >> 2] = d)) {
                        ;(c[1028] = c[1028] & ~(1 << a)), (j = i = g), (b = h)
                        break
                      }
                    } else if (
                      !(c[
                        ((0 | c[(j = (f + 16) | 0) >> 2]) == (0 | g)
                          ? j
                          : (f + 20) | 0) >> 2
                      ] = d)
                    ) {
                      ;(j = i = g), (b = h)
                      break
                    }
                    ;(c[(d + 24) >> 2] = f),
                      0 | (a = 0 | c[(b = (g + 16) | 0) >> 2]) &&
                        ((c[(d + 16) >> 2] = a), (c[(a + 24) >> 2] = d)),
                      (b =
                        ((j = i =
                          ((a = 0 | c[(b + 4) >> 2]) &&
                            ((c[(d + 20) >> 2] = a), (c[(a + 24) >> 2] = d)),
                          g)),
                        h))
                  } else (j = i = g), (b = h)
                }
              } while (0)
              if (
                !(k >>> 0 <= i >>> 0) &&
                1 & (d = 0 | c[(a = (k + 4) | 0) >> 2])
              ) {
                if (2 & d)
                  (c[a >> 2] = -2 & d),
                    (c[(j + 4) >> 2] = 1 | b),
                    (f = c[(i + b) >> 2] = b)
                else {
                  if ((0 | c[1033]) == (0 | k))
                    return (
                      (k = ((0 | c[1030]) + b) | 0),
                      (c[1030] = k),
                      (c[1033] = j),
                      (c[(j + 4) >> 2] = 1 | k),
                      void (
                        (0 | j) == (0 | c[1032]) &&
                        ((c[1032] = 0), (c[1029] = 0))
                      )
                    )
                  if ((0 | c[1032]) == (0 | k))
                    return (
                      (k = ((0 | c[1029]) + b) | 0),
                      (c[1029] = k),
                      (c[1032] = i),
                      (c[(j + 4) >> 2] = 1 | k),
                      void (c[(i + k) >> 2] = k)
                    )
                  ;(f = ((-8 & d) + b) | 0), (e = d >>> 3)
                  do {
                    if (d >>> 0 < 256) {
                      if (
                        ((b = 0 | c[(k + 8) >> 2]),
                        (0 | (a = 0 | c[(k + 12) >> 2])) == (0 | b))
                      ) {
                        c[1027] = c[1027] & ~(1 << e)
                        break
                      }
                      ;(c[(b + 12) >> 2] = a), (c[(a + 8) >> 2] = b)
                      break
                    }
                    ;(g = 0 | c[(k + 24) >> 2]), (a = 0 | c[(k + 12) >> 2])
                    do {
                      if ((0 | a) == (0 | k)) {
                        if (
                          !(a = 0 | c[(b = ((d = (k + 16) | 0) + 4) | 0) >> 2])
                        ) {
                          if (!(a = 0 | c[d >> 2])) {
                            d = 0
                            break
                          }
                          b = d
                        }
                        for (;;)
                          if ((d = 0 | c[(e = (a + 20) | 0) >> 2]))
                            (a = d), (b = e)
                          else {
                            if (!(d = 0 | c[(e = (a + 16) | 0) >> 2])) break
                            ;(a = d), (b = e)
                          }
                        ;(c[b >> 2] = 0), (d = a)
                      } else
                        (d = 0 | c[(k + 8) >> 2]),
                          (c[(d + 12) >> 2] = a),
                          (c[(a + 8) >> 2] = d),
                          (d = a)
                    } while (0)
                    if (0 | g) {
                      if (
                        ((a = 0 | c[(k + 28) >> 2]),
                        (0 | c[(b = (4412 + (a << 2)) | 0) >> 2]) == (0 | k))
                      ) {
                        if (!(c[b >> 2] = d)) {
                          c[1028] = c[1028] & ~(1 << a)
                          break
                        }
                      } else if (
                        !(c[
                          ((0 | c[(h = (g + 16) | 0) >> 2]) == (0 | k)
                            ? h
                            : (g + 20) | 0) >> 2
                        ] = d)
                      )
                        break
                      ;(c[(d + 24) >> 2] = g),
                        0 | (a = 0 | c[(b = (k + 16) | 0) >> 2]) &&
                          ((c[(d + 16) >> 2] = a), (c[(a + 24) >> 2] = d)),
                        0 | (a = 0 | c[(b + 4) >> 2]) &&
                          ((c[(d + 20) >> 2] = a), (c[(a + 24) >> 2] = d))
                    }
                  } while (0)
                  if (
                    ((c[(j + 4) >> 2] = 1 | f),
                    (c[(i + f) >> 2] = f),
                    (0 | j) == (0 | c[1032]))
                  )
                    return void (c[1029] = f)
                }
                if (((a = f >>> 3), f >>> 0 < 256))
                  return (
                    (d = (4148 + ((a << 1) << 2)) | 0),
                    (b =
                      (b = 0 | c[1027]) & (a = 1 << a)
                        ? 0 | c[(a = b = (d + 8) | 0) >> 2]
                        : ((c[1027] = b | a), (a = (d + 8) | 0), d)),
                    (c[a >> 2] = j),
                    (c[(b + 12) >> 2] = j),
                    (c[(j + 8) >> 2] = b),
                    void (c[(j + 12) >> 2] = d)
                  )
                ;(b =
                  (4412 +
                    ((e = (a = f >>> 8)
                      ? 16777215 < f >>> 0
                        ? 31
                        : (1 &
                            ((k =
                              ((e =
                                (14 -
                                  ((h =
                                    ((h =
                                      ((e =
                                        a <<
                                        (i =
                                          ((i = (a + 1048320) | 0) >>> 16) &
                                          8)) +
                                        520192) |
                                      0) >>>
                                      16) &
                                    4) |
                                    i |
                                    (k =
                                      ((k = ((e <<= h) + 245760) | 0) >>> 16) &
                                      2)) +
                                  ((e <<= k) >>> 15)) |
                                0) +
                                7) |
                              0)
                              ? f >>> k
                              : f)) |
                          (e << 1)
                      : 0) <<
                      2)) |
                  0),
                  (c[(j + 28) >> 2] = e),
                  (c[(j + 20) >> 2] = 0),
                  (a = (c[(j + 16) >> 2] = 0) | c[1028]),
                  (d = 1 << e)
                a: do {
                  if (a & d) {
                    a = 0 | c[b >> 2]
                    b: do {
                      if (((-8 & c[(a + 4) >> 2]) | 0) != (0 | f)) {
                        for (
                          e = f << (31 == (0 | e) ? 0 : (25 - (e >>> 1)) | 0);
                          ;

                        ) {
                          if (
                            !(b =
                              0 |
                              c[(d = (a + 16 + ((e >>> 31) << 2)) | 0) >> 2])
                          )
                            break
                          if (((-8 & c[(b + 4) >> 2]) | 0) == (0 | f)) {
                            a = b
                            break b
                          }
                          ;(e <<= 1), (a = b)
                        }
                        ;(c[d >> 2] = j),
                          (c[(j + 24) >> 2] = a),
                          (c[(j + 12) >> 2] = j),
                          (c[(j + 8) >> 2] = j)
                        break a
                      }
                    } while (0)
                    ;(k = 0 | c[(i = (a + 8) | 0) >> 2]),
                      (c[(k + 12) >> 2] = j),
                      (c[i >> 2] = j),
                      (c[(j + 8) >> 2] = k),
                      (c[(j + 12) >> 2] = a),
                      (c[(j + 24) >> 2] = 0)
                  } else
                    (c[1028] = a | d),
                      (c[b >> 2] = j),
                      (c[(j + 24) >> 2] = b),
                      (c[(j + 12) >> 2] = j),
                      (c[(j + 8) >> 2] = j)
                } while (0)
                if (((k = ((0 | c[1035]) - 1) | 0), !(0 | (c[1035] = k)))) {
                  for (a = 4564; ; ) {
                    if (!(a = 0 | c[a >> 2])) break
                    a = (a + 8) | 0
                  }
                  c[1035] = -1
                }
              }
            }
          }
          function Lc(a, b) {
            var d = 0,
              e = 0,
              f = 0,
              g = 0,
              h = 0,
              i = 0,
              j = 0,
              j = ((a |= 0) + (b |= 0)) | 0,
              d = 0 | c[(a + 4) >> 2]
            do {
              if (1 & d) (i = a), (a = b)
              else {
                if (((e = 0 | c[a >> 2]), !(3 & d))) return
                if (
                  ((h = (e + b) | 0),
                  (0 | c[1032]) == (0 | (g = (a + (0 - e)) | 0)))
                ) {
                  if (3 == ((3 & (d = 0 | c[(a = (j + 4) | 0) >> 2])) | 0))
                    return (
                      (c[1029] = h),
                      (c[a >> 2] = -2 & d),
                      (c[(g + 4) >> 2] = 1 | h),
                      void (c[j >> 2] = h)
                    )
                  ;(i = g), (a = h)
                  break
                }
                if (((b = e >>> 3), e >>> 0 < 256)) {
                  if (
                    ((d = 0 | c[(g + 8) >> 2]),
                    (0 | (a = 0 | c[(g + 12) >> 2])) == (0 | d))
                  ) {
                    ;(c[1027] = c[1027] & ~(1 << b)), (i = g), (a = h)
                    break
                  }
                  ;(c[(d + 12) >> 2] = a),
                    (c[(a + 8) >> 2] = d),
                    (i = g),
                    (a = h)
                  break
                }
                ;(f = 0 | c[(g + 24) >> 2]), (d = 0 | c[(g + 12) >> 2])
                do {
                  if ((0 | d) == (0 | g)) {
                    if (!(d = 0 | c[(a = ((b = (g + 16) | 0) + 4) | 0) >> 2])) {
                      if (!(d = 0 | c[b >> 2])) {
                        b = 0
                        break
                      }
                      a = b
                    }
                    for (;;)
                      if ((b = 0 | c[(e = (d + 20) | 0) >> 2])) (d = b), (a = e)
                      else {
                        if (!(b = 0 | c[(e = (d + 16) | 0) >> 2])) break
                        ;(d = b), (a = e)
                      }
                    ;(c[a >> 2] = 0), (b = d)
                  } else
                    (b = 0 | c[(g + 8) >> 2]),
                      (c[(b + 12) >> 2] = d),
                      (c[(d + 8) >> 2] = b),
                      (b = d)
                } while (0)
                if (f) {
                  if (
                    ((d = 0 | c[(g + 28) >> 2]),
                    (0 | c[(a = (4412 + (d << 2)) | 0) >> 2]) == (0 | g))
                  ) {
                    if (!(c[a >> 2] = b)) {
                      ;(c[1028] = c[1028] & ~(1 << d)), (i = g), (a = h)
                      break
                    }
                  } else if (
                    !(c[
                      ((0 | c[(i = (f + 16) | 0) >> 2]) == (0 | g)
                        ? i
                        : (f + 20) | 0) >> 2
                    ] = b)
                  ) {
                    ;(i = g), (a = h)
                    break
                  }
                  ;(c[(b + 24) >> 2] = f),
                    0 | (d = 0 | c[(a = (g + 16) | 0) >> 2]) &&
                      ((c[(b + 16) >> 2] = d), (c[(d + 24) >> 2] = b)),
                    (a =
                      ((i =
                        ((d = 0 | c[(a + 4) >> 2]) &&
                          ((c[(b + 20) >> 2] = d), (c[(d + 24) >> 2] = b)),
                        g)),
                      h))
                } else (i = g), (a = h)
              }
            } while (0)
            if (2 & (b = 0 | c[(d = (j + 4) | 0) >> 2]))
              (c[d >> 2] = -2 & b),
                (c[(i + 4) >> 2] = 1 | a),
                (c[(i + a) >> 2] = a)
            else {
              if ((0 | c[1033]) == (0 | j))
                return (
                  (j = ((0 | c[1030]) + a) | 0),
                  (c[1030] = j),
                  (c[1033] = i),
                  (c[(i + 4) >> 2] = 1 | j),
                  void (
                    (0 | i) == (0 | c[1032]) && ((c[1032] = 0), (c[1029] = 0))
                  )
                )
              if ((0 | c[1032]) == (0 | j))
                return (
                  (j = ((0 | c[1029]) + a) | 0),
                  (c[1029] = j),
                  (c[1032] = i),
                  (c[(i + 4) >> 2] = 1 | j),
                  void (c[(i + j) >> 2] = j)
                )
              ;(g = ((-8 & b) + a) | 0), (e = b >>> 3)
              do {
                if (b >>> 0 < 256) {
                  if (
                    ((a = 0 | c[(j + 8) >> 2]),
                    (0 | (d = 0 | c[(j + 12) >> 2])) == (0 | a))
                  ) {
                    c[1027] = c[1027] & ~(1 << e)
                    break
                  }
                  ;(c[(a + 12) >> 2] = d), (c[(d + 8) >> 2] = a)
                  break
                }
                ;(f = 0 | c[(j + 24) >> 2]), (d = 0 | c[(j + 12) >> 2])
                do {
                  if ((0 | d) == (0 | j)) {
                    if (!(d = 0 | c[(a = ((b = (j + 16) | 0) + 4) | 0) >> 2])) {
                      if (!(d = 0 | c[b >> 2])) {
                        b = 0
                        break
                      }
                      a = b
                    }
                    for (;;)
                      if ((b = 0 | c[(e = (d + 20) | 0) >> 2])) (d = b), (a = e)
                      else {
                        if (!(b = 0 | c[(e = (d + 16) | 0) >> 2])) break
                        ;(d = b), (a = e)
                      }
                    ;(c[a >> 2] = 0), (b = d)
                  } else
                    (b = 0 | c[(j + 8) >> 2]),
                      (c[(b + 12) >> 2] = d),
                      (c[(d + 8) >> 2] = b),
                      (b = d)
                } while (0)
                if (0 | f) {
                  if (
                    ((d = 0 | c[(j + 28) >> 2]),
                    (0 | c[(a = (4412 + (d << 2)) | 0) >> 2]) == (0 | j))
                  ) {
                    if (!(c[a >> 2] = b)) {
                      c[1028] = c[1028] & ~(1 << d)
                      break
                    }
                  } else if (
                    !(c[
                      ((0 | c[(h = (f + 16) | 0) >> 2]) == (0 | j)
                        ? h
                        : (f + 20) | 0) >> 2
                    ] = b)
                  )
                    break
                  ;(c[(b + 24) >> 2] = f),
                    0 | (d = 0 | c[(a = (j + 16) | 0) >> 2]) &&
                      ((c[(b + 16) >> 2] = d), (c[(d + 24) >> 2] = b)),
                    0 | (d = 0 | c[(a + 4) >> 2]) &&
                      ((c[(b + 20) >> 2] = d), (c[(d + 24) >> 2] = b))
                }
              } while (0)
              if (
                ((c[(i + 4) >> 2] = 1 | g),
                (c[(i + g) >> 2] = g),
                (0 | i) == (0 | c[1032]))
              )
                return void (c[1029] = g)
              a = g
            }
            if (((d = a >>> 3), a >>> 0 < 256))
              return (
                (b = (4148 + ((d << 1) << 2)) | 0),
                (a =
                  (a = 0 | c[1027]) & (d = 1 << d)
                    ? 0 | c[(d = a = (b + 8) | 0) >> 2]
                    : ((c[1027] = a | d), (d = (b + 8) | 0), b)),
                (c[d >> 2] = i),
                (c[(a + 12) >> 2] = i),
                (c[(i + 8) >> 2] = a),
                void (c[(i + 12) >> 2] = b)
              )
            if (
              ((b =
                (4412 +
                  ((f = (d = a >>> 8)
                    ? 16777215 < a >>> 0
                      ? 31
                      : (1 &
                          ((j =
                            ((f =
                              (14 -
                                ((g =
                                  ((g =
                                    ((f =
                                      d <<
                                      (h =
                                        ((h = (d + 1048320) | 0) >>> 16) & 8)) +
                                      520192) |
                                    0) >>>
                                    16) &
                                  4) |
                                  h |
                                  (j =
                                    ((j = ((f <<= g) + 245760) | 0) >>> 16) &
                                    2)) +
                                ((f <<= j) >>> 15)) |
                              0) +
                              7) |
                            0)
                            ? a >>> j
                            : a)) |
                        (f << 1)
                    : 0) <<
                    2)) |
                0),
              (c[(i + 28) >> 2] = f),
              (c[(i + 20) >> 2] = 0),
              !((d = (c[(i + 16) >> 2] = 0) | c[1028]) & (e = 1 << f)))
            )
              return (
                (c[1028] = d | e),
                (c[b >> 2] = i),
                (c[(i + 24) >> 2] = b),
                (c[(i + 12) >> 2] = i),
                void (c[(i + 8) >> 2] = i)
              )
            d = 0 | c[b >> 2]
            a: do {
              if (((-8 & c[(d + 4) >> 2]) | 0) != (0 | a)) {
                for (f = a << (31 == (0 | f) ? 0 : (25 - (f >>> 1)) | 0); ; ) {
                  if (!(b = 0 | c[(e = (d + 16 + ((f >>> 31) << 2)) | 0) >> 2]))
                    break
                  if (((-8 & c[(b + 4) >> 2]) | 0) == (0 | a)) {
                    d = b
                    break a
                  }
                  ;(f <<= 1), (d = b)
                }
                return (
                  (c[e >> 2] = i),
                  (c[(i + 24) >> 2] = d),
                  (c[(i + 12) >> 2] = i),
                  void (c[(i + 8) >> 2] = i)
                )
              }
            } while (0)
            ;(j = 0 | c[(h = (d + 8) | 0) >> 2]),
              (c[(j + 12) >> 2] = i),
              (c[h >> 2] = i),
              (c[(i + 8) >> 2] = j),
              (c[(i + 12) >> 2] = d),
              (c[(i + 24) >> 2] = 0)
          }
          function Nc(a, b, d) {
            a |= 0
            var e
            return (0 != ((3 & (b |= 0)) | 0)) | (0 == (0 | (e = b >>> 2))) ||
              ((1073741823 + e) & e) | 0
              ? 0 | (a = 28)
              : !(((-64 - b) | 0) >>> 0 < (d |= 0) >>> 0) &&
                (b =
                  0 |
                  (function (a, b) {
                    b |= 0
                    var g,
                      d = 0,
                      e = 0,
                      f = 0,
                      h = 0,
                      i = 0
                    if (((d = 16 < (a |= 0) >>> 0 ? a : 16) + -1) & d)
                      for (a = 16; ; ) {
                        if (!(a >>> 0 < d >>> 0)) break
                        a <<= 1
                      }
                    else a = d
                    if (((-64 - a) | 0) >>> 0 <= b >>> 0)
                      return (c[1026] = 48), (h = 0) | h
                    if (
                      !(d =
                        0 |
                        Jc(
                          (12 + (g = b >>> 0 < 11 ? 16 : (b + 11) & -8) + a) | 0
                        ))
                    )
                      return (h = 0) | h
                    f = (d + -8) | 0
                    do {
                      if ((a + -1) & d) {
                        if (
                          ((e =
                            15 <
                            (((e = (((d + a + -1) & (0 - a)) - 8) | 0) -
                              (b = f)) |
                              0) >>>
                              0
                              ? e
                              : (e + a) | 0),
                          (d =
                            ((-8 & (i = 0 | c[(a = (d + -4) | 0) >> 2])) -
                              (b = (e - b) | 0)) |
                            0),
                          3 & i)
                        ) {
                          ;(c[(i = (e + 4) | 0) >> 2] =
                            d | (1 & c[i >> 2]) | 2),
                            (c[(d = (e + d + 4) | 0) >> 2] = 1 | c[d >> 2]),
                            (c[a >> 2] = b | (1 & c[a >> 2]) | 2),
                            (c[i >> 2] = 1 | c[i >> 2]),
                            Lc(f, b),
                            (a = b = e)
                          break
                        }
                        ;(c[e >> 2] = (0 | c[f >> 2]) + b),
                          (c[(e + 4) >> 2] = d),
                          (a = b = e)
                        break
                      }
                    } while (((a = b = f), 0))
                    return (
                      (3 & (a = 0 | c[(d = (a + 4) | 0) >> 2])) | 0 &&
                        ((16 + g) | 0) >>> 0 < (h = -8 & a) >>> 0 &&
                        ((i = (h - g) | 0),
                        (f = (b + g) | 0),
                        (c[d >> 2] = g | (1 & a) | 2),
                        (c[(f + 4) >> 2] = 3 | i),
                        (c[(h = (b + h + 4) | 0) >> 2] = 1 | c[h >> 2]),
                        Lc(f, i)),
                      0 | (i = (b + 8) | 0)
                    )
                  })(16 < b >>> 0 ? b : 16, d))
              ? ((c[a >> 2] = b), (a = 0) | a)
              : 0 | (a = 48)
          }
          function Oc(a) {
            var b,
              d = 0
            return (a = ((b = 0 | c[(d = 4624) >> 2]) + (a |= 0)) | 0) >>> 0 >
              (0 | H()) >>> 0 && 0 == (0 | J(0 | a))
              ? ((c[1026] = 48), 0 | (d = -1))
              : ((c[d >> 2] = a), 0 | (d = b))
          }
          function Qc(a, b, c, d) {
            ;(b |= 0), (d |= 0)
            var e = 0,
              f = 0
            return (
              (c =
                0 |
                (function (a, b) {
                  var f, e, c, d
                  return (
                    (a =
                      (((c =
                        0 |
                        v((e = 65535 & (b |= 0)), (f = 65535 & (a |= 0)))) >>>
                        16) +
                        (0 | v(e, (d = a >>> 16)))) |
                      0),
                    (b = 0 | v((e = b >>> 16), f)),
                    0 |
                      (y(
                        ((a >>> 16) +
                          (0 | v(e, d)) +
                          ((((65535 & a) + b) | 0) >>> 16)) |
                          0
                      ),
                      ((a + b) << 16) | (65535 & c) | 0)
                  )
                })((e = a |= 0), (f = c |= 0))),
              (a = 0 | z()),
              0 | (y(((0 | v(b, f)) + (0 | v(d, e)) + a) | (0 & a) | 0), 0 | c)
            )
          }
          function Rc(a, b, c, d) {
            return (
              0 |
              (y(
                (((b |= 0) +
                  (d |= 0) +
                  (((c = ((a |= 0) + (c |= 0)) >>> 0) >>> 0 < a >>> 0) | 0)) >>>
                  0) |
                  0
              ),
              0 | c)
            )
          }
          function Sc(a, b, c, d) {
            return (
              0 |
              (y(
                0 |
                  (d =
                    ((b |= 0) -
                      (d |= 0) -
                      (((a |= 0) >>> 0 < (c |= 0) >>> 0) | 0)) >>>
                    0)
              ),
              ((a - c) >>> 0) | 0)
            )
          }
          function Tc(a) {
            return 0 | ((a |= 0) ? (31 - (0 | w(a ^ (a - 1)))) | 0 : 32)
          }
          function Uc(a, b, d, e, f) {
            f |= 0
            var g = 0,
              h = 0,
              i = 0,
              j = 0,
              k = 0,
              l = 0,
              m = 0,
              n = 0,
              o = 0,
              p = 0,
              l = (a |= 0),
              h = (d |= 0),
              i = (n = e |= 0)
            if (!(k = j = b |= 0))
              return (
                (g = 0 != (0 | f)),
                i
                  ? (g && ((c[f >> 2] = 0 | a), (c[(f + 4) >> 2] = 0 & b)),
                    (f = n = 0) | (y(0 | n), f))
                  : (g &&
                      ((c[f >> 2] = (l >>> 0) % (h >>> 0)),
                      (c[(f + 4) >> 2] = 0)),
                    (f = ((l >>> (n = 0)) / (h >>> 0)) >>> 0),
                    0 | (y(0 | n), f))
              )
            g = 0 == (0 | i)
            do {
              if (h) {
                if (!g) {
                  if ((g = ((0 | w(0 | i)) - (0 | w(0 | k))) | 0) >>> 0 <= 31) {
                    ;(a =
                      ((l >>> ((h = m = (g + 1) | 0) >>> 0)) &
                        (b = (g - 31) >> 31)) |
                      (k << (i = (31 - g) | 0))),
                      (b &= k >>> (m >>> 0)),
                      (g = 0),
                      (i = l << i)
                    break
                  }
                  return f
                    ? ((c[f >> 2] = 0 | a),
                      (c[(f + 4) >> 2] = j | (0 & b)),
                      (f = n = 0) | (y(0 | n), f))
                    : (f = n = 0) | (y(0 | n), f)
                }
                if (((g = (h - 1) | 0) & h) | 0) {
                  ;(a =
                    ((((m =
                      (32 - (i = (33 + (0 | w(0 | h)) - (0 | w(0 | k))) | 0)) |
                      0) -
                      1) >>
                      31) &
                      (k >>> ((o = (i - 32) | 0) >>> 0))) |
                    (((k << m) | (l >>> ((h = i) >>> 0))) & (b = o >> 31))),
                    (b &= k >>> (i >>> 0)),
                    (g = (l << (p = (64 - i) | 0)) & (j = m >> 31)),
                    (i =
                      (((k << p) | (l >>> (o >>> 0))) & j) |
                      ((l << m) & ((i - 33) >> 31)))
                  break
                }
                return (
                  0 | f && ((c[f >> 2] = g & l), (c[(f + 4) >> 2] = 0)),
                  1 == (0 | h)
                    ? ((p = 0 | a), 0 | (y(0 | (o = j | (0 & b))), p))
                    : ((o = (k >>> ((p = 0 | Tc(0 | h)) >>> 0)) | 0),
                      (p = (k << (32 - p)) | (l >>> (p >>> 0)) | 0),
                      0 | (y(0 | o), p))
                )
              }
              if (g)
                return (
                  0 | f &&
                    ((c[f >> 2] = (k >>> 0) % (h >>> 0)),
                    (c[(f + 4) >> 2] = 0)),
                  (p = ((k >>> (o = 0)) / (h >>> 0)) >>> 0),
                  0 | (y(0 | o), p)
                )
              if (!l)
                return (
                  0 | f &&
                    ((c[f >> 2] = 0),
                    (c[(f + 4) >> 2] = (k >>> 0) % (i >>> 0))),
                  (p = ((k >>> (o = 0)) / (i >>> 0)) >>> 0),
                  0 | (y(0 | o), p)
                )
              if (!((g = (i - 1) | 0) & i))
                return (
                  0 | f &&
                    ((c[f >> 2] = 0 | a),
                    (c[(f + 4) >> 2] = (g & k) | (0 & b))),
                  (p = k >>> (((o = 0) | Tc(0 | i)) >>> 0)),
                  0 | (y(0 | o), p)
                )
              if ((g = ((0 | w(0 | i)) - (0 | w(0 | k))) | 0) >>> 0 <= 30) {
                ;(a =
                  (k << (i = (31 - g) | 0)) |
                  (l >>> ((h = b = (g + 1) | 0) >>> 0))),
                  (b = k >>> (b >>> 0)),
                  (g = 0),
                  (i = l << i)
                break
              }
              return (
                f && ((c[f >> 2] = 0 | a), (c[(f + 4) >> 2] = j | (0 & b))),
                (p = o = 0) | (y(0 | o), p)
              )
            } while (0)
            if (h) {
              for (
                k = 0 | Rc(0 | (m = 0 | d), 0 | (l = n | (0 & e)), -1, -1),
                  d = 0 | z(),
                  j = i,
                  i = 0;
                (j = (g >>> 31) | ((e = j) << 1)),
                  (g = i | (g << 1)),
                  Sc(
                    0 | k,
                    0 | d,
                    0 | (e = (a << 1) | (e >>> 31) | 0),
                    0 | (n = (a >>> 31) | (b << 1) | 0)
                  ),
                  (i =
                    1 &
                    (o =
                      ((p = 0 | z()) >> 31) | (((0 | p) < 0 ? -1 : 0) << 1))),
                  (a =
                    0 |
                    Sc(
                      0 | e,
                      0 | n,
                      (o & m) | 0,
                      (((((0 | p) < 0 ? -1 : 0) >> 31) |
                        (((0 | p) < 0 ? -1 : 0) << 1)) &
                        l) |
                        0
                    )),
                  (b = 0 | z()),
                  0 != (0 | (h = (h - 1) | 0));

              );
              ;(k = j), (j = 0)
            } else (k = i), (i = j = 0)
            return (
              (h = 0) | f && ((c[f >> 2] = a), (c[(f + 4) >> 2] = b)),
              (p = (-2 & ((g << 1) | 0)) | i),
              0 |
                (y(
                  0 |
                    (o =
                      ((0 | g) >>> 31) |
                      ((k | h) << 1) |
                      (0 & ((h << 1) | (g >>> 31))) |
                      j)
                ),
                p)
            )
          }
          function Vc(a, b, c, d) {
            return 0 | Uc((a |= 0), (b |= 0), (c |= 0), (d |= 0), 0)
          }
          function Wc(a, b, c) {
            return (
              (a |= 0),
              (b |= 0),
              (0 | (c |= 0)) < 32
                ? (y((b >>> c) | 0),
                  (a >>> c) | ((b & ((1 << c) - 1)) << (32 - c)))
                : (y(0), (b >>> (c - 32)) | 0)
            )
          }
          function Xc(a, b, c) {
            return (
              (a |= 0),
              (b |= 0),
              (0 | (c |= 0)) < 32
                ? (y(
                    (b << c) |
                      ((a & (((1 << c) - 1) << (32 - c))) >>> (32 - c)) |
                      0
                  ),
                  a << c)
                : (y((a << (c - 32)) | 0), 0)
            )
          }
          function Yc() {
            return 4624
          }
          function Zc(b, d, e) {
            ;(b |= 0), (d |= 0)
            var f, g, h
            if (8192 <= (0 | (e |= 0))) return I(0 | b, 0 | d, 0 | e), 0 | b
            if (((h = 0 | b), (g = (b + e) | 0), (3 & b) == (3 & d))) {
              for (; 3 & b; ) {
                if (!e) return 0 | h
                ;(a[b >> 0] = 0 | a[d >> 0]),
                  (b = (b + 1) | 0),
                  (d = (d + 1) | 0),
                  (e = (e - 1) | 0)
              }
              for (f = ((e = (-4 & g) | 0) - 64) | 0; (0 | b) <= (0 | f); )
                (c[b >> 2] = c[d >> 2]),
                  (c[(b + 4) >> 2] = c[(d + 4) >> 2]),
                  (c[(b + 8) >> 2] = c[(d + 8) >> 2]),
                  (c[(b + 12) >> 2] = c[(d + 12) >> 2]),
                  (c[(b + 16) >> 2] = c[(d + 16) >> 2]),
                  (c[(b + 20) >> 2] = c[(d + 20) >> 2]),
                  (c[(b + 24) >> 2] = c[(d + 24) >> 2]),
                  (c[(b + 28) >> 2] = c[(d + 28) >> 2]),
                  (c[(b + 32) >> 2] = c[(d + 32) >> 2]),
                  (c[(b + 36) >> 2] = c[(d + 36) >> 2]),
                  (c[(b + 40) >> 2] = c[(d + 40) >> 2]),
                  (c[(b + 44) >> 2] = c[(d + 44) >> 2]),
                  (c[(b + 48) >> 2] = c[(d + 48) >> 2]),
                  (c[(b + 52) >> 2] = c[(d + 52) >> 2]),
                  (c[(b + 56) >> 2] = c[(d + 56) >> 2]),
                  (c[(b + 60) >> 2] = c[(d + 60) >> 2]),
                  (b = (b + 64) | 0),
                  (d = (d + 64) | 0)
              for (; (0 | b) < (0 | e); )
                (c[b >> 2] = c[d >> 2]), (b = (b + 4) | 0), (d = (d + 4) | 0)
            } else
              for (e = (g - 4) | 0; (0 | b) < (0 | e); )
                (a[b >> 0] = 0 | a[d >> 0]),
                  (a[(b + 1) >> 0] = 0 | a[(d + 1) >> 0]),
                  (a[(b + 2) >> 0] = 0 | a[(d + 2) >> 0]),
                  (a[(b + 3) >> 0] = 0 | a[(d + 3) >> 0]),
                  (b = (b + 4) | 0),
                  (d = (d + 4) | 0)
            for (; (0 | b) < (0 | g); )
              (a[b >> 0] = 0 | a[d >> 0]), (b = (b + 1) | 0), (d = (d + 1) | 0)
            return 0 | h
          }
          function _c(b, c, d) {
            var e
            if (
              ((0 | (c |= 0)) < (0 | (b |= 0))) &
              ((0 | b) < ((c + (d |= 0)) | 0))
            ) {
              for (c = (c + d) | 0, b = ((e = b) + d) | 0; 0 < (0 | d); )
                (d = (d - 1) | 0),
                  (a[(b = (b - 1) | 0) >> 0] = 0 | a[(c = (c - 1) | 0) >> 0])
              b = e
            } else Zc(b, c, d)
            return 0 | b
          }
          function $c(b, d, e) {
            var f,
              g,
              i,
              h = ((b |= 0) + (e |= 0)) | 0
            if (((d = (d | 0) & 255), 67 <= (0 | e))) {
              for (; 3 & b; ) (a[b >> 0] = d), (b = (b + 1) | 0)
              for (
                i = d | (d << 8) | (d << 16) | (d << 24),
                  g = ((f = (-4 & h) | 0) - 64) | 0;
                (0 | b) <= (0 | g);

              )
                (c[b >> 2] = i),
                  (c[(b + 4) >> 2] = i),
                  (c[(b + 8) >> 2] = i),
                  (c[(b + 12) >> 2] = i),
                  (c[(b + 16) >> 2] = i),
                  (c[(b + 20) >> 2] = i),
                  (c[(b + 24) >> 2] = i),
                  (c[(b + 28) >> 2] = i),
                  (c[(b + 32) >> 2] = i),
                  (c[(b + 36) >> 2] = i),
                  (c[(b + 40) >> 2] = i),
                  (c[(b + 44) >> 2] = i),
                  (c[(b + 48) >> 2] = i),
                  (c[(b + 52) >> 2] = i),
                  (c[(b + 56) >> 2] = i),
                  (c[(b + 60) >> 2] = i),
                  (b = (b + 64) | 0)
              for (; (0 | b) < (0 | f); ) (c[b >> 2] = i), (b = (b + 4) | 0)
            }
            for (; (0 | b) < (0 | h); ) (a[b >> 0] = d), (b = (b + 1) | 0)
            return (h - e) | 0
          }
          function md(a) {
            return x(0), 0
          }
          function od(a, b, c, d) {
            return x(2), 0
          }
          function ea(a) {
            var b,
              d,
              g,
              h,
              i,
              j,
              n,
              o,
              p,
              q,
              r,
              s,
              t,
              u,
              v,
              w,
              x,
              y,
              k = 0,
              l = 0,
              m = 0 | c[((a |= 0) + 500) >> 2]
            if (!((0 | m) <= 0)) {
              ;(n = 0 | c[(a + 504) >> 2]),
                (o = 0 | c[(a + 444) >> 2]),
                (d = 0 | c[(a + 536) >> 2]),
                (l = 0)
              do {
                if (
                  ((g = 0 | c[(n + ((24 * l) | 0) + 12) >> 2]),
                  (h =
                    0 | c[(o + (c[(n + ((24 * l) | 0) + 4) >> 2] << 2)) >> 2]),
                  (i =
                    0 | c[(o + (c[(n + ((24 * l) | 0) + 8) >> 2] << 2)) >> 2]),
                  (j = 0 | c[(n + ((24 * l) | 0) + 16) >> 2]),
                  (a = 0 | c[(n + ((24 * l) | 0) + 20) >> 2]),
                  (b = +f[(d + (l << 2)) >> 2]),
                  0 < (0 | g))
                )
                  for (
                    k = 0;
                    (x = +f[(j + (k << 2)) >> 2]),
                      (s = +f[(j + ((p = 1 | k) << 2)) >> 2]),
                      (w = ((0 | e[(a + (k << 1)) >> 1]) << 1) & 65534),
                      (v = +f[(y = (h + (w << 2)) | 0) >> 2]),
                      (r = +f[(w = (h + ((1 | w) << 2)) | 0) >> 2]),
                      (p = ((0 | e[(a + (p << 1)) >> 1]) << 1) & 65534),
                      (u = +f[(t = (i + (p << 2)) | 0) >> 2]),
                      (q = +f[(p = (i + ((1 | p) << 2)) | 0) >> 2]),
                      (f[y >> 2] = v + x * (u - v) * b),
                      (f[w >> 2] = r + x * (q - r) * b),
                      (f[t >> 2] = u + s * (v - u) * b),
                      (f[p >> 2] = q + s * (r - q) * b),
                      (0 | (k = (k + 2) | 0)) < (0 | g);

                  );
              } while ((0 | (l = (l + 1) | 0)) != (0 | m))
            }
          }
          function fa(a) {
            var b = 0 | c[(a |= 0) >> 2]
            ;(0 | d[(4 + b) >> 0]) < 4 ||
              ga(
                a,
                0 | c[(a + 596) >> 2],
                0 | c[(a + 600) >> 2],
                0 | c[(984 + b) >> 2],
                0 | c[(a + 152) >> 2],
                0 | c[(796 + b) >> 2]
              )
          }
          function ga(a, b, d, e, g, h) {
            ;(a |= 0), (e |= 0), (g |= 0), (h |= 0)
            var l,
              o,
              p,
              q,
              r,
              s,
              t,
              u,
              w,
              i = 0,
              j = 0,
              k = 0,
              m = 0,
              n = 0,
              v = S
            if (
              ((S = (S + 16) | 0),
              (u = (v + 8) | 0),
              (t = v),
              (s = ((d |= 0) + ((12 * (b |= 0)) | 0)) | 0),
              (0 | b) <= 0)
            )
              S = v
            else {
              do {
                ;(b = 0 | c[d >> 2]),
                  (o = 0 | c[(g + (b << 2)) >> 2]),
                  (q = (b = 0 | c[(h + (b << 2)) >> 2]) << 1),
                  (n = 0 | c[(d + 4) >> 2]),
                  (i = 0 | c[(d + 8) >> 2]),
                  (p = 0 | c[(1028 + (0 | c[a >> 2])) >> 2]),
                  (r = (i + ((48 * n) | 0)) | 0)
                a: do {
                  if (0 < (0 | n)) {
                    if ((0 | b) <= 0)
                      for (;;)
                        if (
                          (3 <= (b = 0 | c[(i + 8) >> 2]) >>> 0 &&
                            ((c[u >> 2] = b), ia(0, 784, u)),
                          r >>> 0 <= (i = (i + 48) | 0) >>> 0)
                        )
                          break a
                    do {
                      ;(j = (e + (c[(i + 4) >> 2] << 2)) | 0),
                        (b = 0 | c[(i + 8) >> 2])
                      b: do {
                        if (0 | b)
                          switch (
                            ((n =
                              (p +
                                (c[(j + (c[(i + 12) >> 2] << 2)) >> 2] << 2)) |
                              0),
                            0 | b)
                          ) {
                            case 1:
                              for (
                                j = (i + 20) | 0, b = (i + 44) | 0, k = 0;
                                (f[(m = (o + (k << 2)) | 0) >> 2] =
                                  +f[m >> 2] +
                                  +f[b >> 2] *
                                    (+f[(n + (k << 2)) >> 2] * +f[j >> 2])),
                                  (0 | (k = (k + 1) | 0)) != (0 | q);

                              );
                              break
                            case 2:
                              for (
                                j =
                                  (p +
                                    (c[(j + (c[(i + 16) >> 2] << 2)) >> 2] <<
                                      2)) |
                                  0,
                                  k = (i + 20) | 0,
                                  l = (i + 24) | 0,
                                  b = (i + 44) | 0,
                                  m = 0;
                                (f[(w = (o + (m << 2)) | 0) >> 2] =
                                  +f[w >> 2] +
                                  +f[b >> 2] *
                                    (+f[(n + (m << 2)) >> 2] * +f[k >> 2] +
                                      +f[(j + (m << 2)) >> 2] * +f[l >> 2])),
                                  (0 | (m = (m + 1) | 0)) != (0 | q);

                              );
                              break
                            default:
                              ;(c[t >> 2] = b), ia(0, 784, t)
                              break b
                          }
                      } while (0)
                    } while ((i = (i + 48) | 0) >>> 0 < r >>> 0)
                  }
                } while (0)
              } while ((d = (d + 12) | 0) >>> 0 < s >>> 0)
              S = v
            }
          }
          function ha(a) {
            var b = 0 | c[(a |= 0) >> 2]
            ;(0 | d[(4 + b) >> 0]) < 4 ||
              ga(
                a,
                0 | c[(a + 604) >> 2],
                0 | c[(a + 608) >> 2],
                0 | c[(1024 + b) >> 2],
                0 | c[(a + 444) >> 2],
                0 | c[(892 + b) >> 2]
              )
          }
          function ia(a, b, d) {
            ;(a |= 0), (b |= 0), (d |= 0)
            var e,
              f,
              g = S
            ;(S = (S + 272) | 0),
              (a = (g + 16) | 0),
              (f = g),
              (S =
                ((e = 0 | c[1008]) &&
                  ((c[f >> 2] = d), cc(a, b, f), Z[1 & e](a)),
                g))
          }
          function ma(b, d, e) {
            e |= 0
            var m,
              f = 0,
              g = 0,
              h = 0,
              i = 0,
              j = 0,
              k = 0,
              l = 0,
              n = 0,
              o = 0,
              p = 0,
              o = 0 | a[((b |= 0) + 4) >> 0]
            if (
              ((c[(d |= 0) >> 2] = 628),
              (p = 0 | c[(n = (b + 704) | 0) >> 2]),
              0 < (0 | (j = 0 | c[p >> 2])))
            ) {
              for (
                f = 0 | c[(b + 1048) >> 2],
                  g = 0 | c[(b + 720) >> 2],
                  i = h = 0;
                (i =
                  ((1 << c[(f + (c[(g + (h << 2)) >> 2] << 2)) >> 2]) + i) | 0),
                  (0 | (h = (h + 1) | 0)) != (0 | j);

              );
              f = i << 2
            } else f = 0
            if (
              ((c[(d + 4) >> 2] = 12 * j),
              (c[(d + 8) >> 2] = c[p >> 2] << 2),
              (c[(d + 12) >> 2] = c[p >> 2] << 2),
              (c[(d + 16) >> 2] = c[p >> 2] << 2),
              (c[(d + 20) >> 2] = c[p >> 2] << 2),
              (c[(d + 24) >> 2] = c[p >> 2] << 2),
              (c[(d + 28) >> 2] = f),
              (c[(d + 32) >> 2] = c[p >> 2] << 2),
              (c[(d + 36) >> 2] = f),
              (c[(d + 40) >> 2] = f),
              (c[(d + 44) >> 2] = c[(m = (p + 4) | 0) >> 2] << 5),
              (c[(d + 48) >> 2] = c[m >> 2] << 2),
              (c[(d + 52) >> 2] = c[m >> 2] << 2),
              (c[(d + 56) >> 2] = c[m >> 2] << 2),
              (c[(d + 60) >> 2] = c[m >> 2] << 4),
              (c[(d + 64) >> 2] = c[m >> 2] << 4),
              0 < (0 | (l = 0 | c[(m = (p + 8) | 0) >> 2])))
            ) {
              for (
                g = 0 | c[(b + 796) >> 2],
                  h = 0 | c[(b + 1048) >> 2],
                  i = 0 | c[(b + 780) >> 2],
                  f = k = j = 0;
                (f = (((15 + (c[(g + (j << 2)) >> 2] << 3)) & -16) + f) | 0),
                  (k =
                    ((1 << c[(h + (c[(i + (j << 2)) >> 2] << 2)) >> 2]) + k) |
                    0),
                  (0 | (j = (j + 1) | 0)) != (0 | l);

              );
              g = k << 2
            } else f = g = 0
            if (
              ((c[(d + 68) >> 2] = 24 * l),
              (c[(d + 72) >> 2] = c[m >> 2] << 2),
              (c[(d + 76) >> 2] = c[m >> 2] << 2),
              (c[(d + 80) >> 2] = c[m >> 2] << 2),
              (c[(d + 84) >> 2] = f),
              (c[(d + 88) >> 2] = c[m >> 2] << 4),
              (c[(d + 92) >> 2] = c[m >> 2] << 4),
              (c[(d + 96) >> 2] = c[m >> 2] << 2),
              (c[(d + 100) >> 2] = g),
              (c[(d + 104) >> 2] = c[m >> 2] << 2),
              (c[(d + 108) >> 2] = g),
              (c[(d + 112) >> 2] = g),
              (c[(d + 116) >> 2] = g),
              (c[(d + 120) >> 2] = g),
              (c[(d + 124) >> 2] = g),
              (c[(d + 128) >> 2] = g),
              (c[(d + 132) >> 2] = g),
              (c[(d + 136) >> 2] = g),
              (c[(d + 140) >> 2] = g),
              (c[(d + 144) >> 2] = c[m >> 2] << 2),
              (c[(d + 148) >> 2] = c[m >> 2] << 2),
              (c[(d + 152) >> 2] = c[m >> 2] << 2),
              (c[(d + 156) >> 2] = c[m >> 2] << 2),
              (c[(d + 160) >> 2] = c[m >> 2] << 2),
              (c[(d + 164) >> 2] = c[m >> 2] << 2),
              0 < (0 | (j = 0 | c[(k = (p + 12) | 0) >> 2])))
            ) {
              for (
                f = 0 | c[(b + 1048) >> 2],
                  g = 0 | c[(b + 812) >> 2],
                  i = h = 0;
                (i =
                  ((1 << c[(f + (c[(g + (h << 2)) >> 2] << 2)) >> 2]) + i) | 0),
                  (0 | (h = (h + 1) | 0)) != (0 | j);

              );
              f = i << 2
            } else f = 0
            if (
              ((c[(d + 168) >> 2] = 12 * j),
              (c[(d + 172) >> 2] = c[k >> 2] << 2),
              (c[(d + 176) >> 2] = c[k >> 2] << 2),
              (c[(d + 180) >> 2] = c[k >> 2] << 2),
              (c[(d + 184) >> 2] = c[k >> 2] << 2),
              (c[(d + 188) >> 2] = c[k >> 2] << 2),
              (c[(d + 192) >> 2] = c[k >> 2] << 2),
              (c[(d + 196) >> 2] = c[k >> 2] << 2),
              (c[(d + 200) >> 2] = c[k >> 2] << 2),
              (c[(d + 204) >> 2] = c[k >> 2] << 4),
              (c[(d + 208) >> 2] = c[k >> 2] << 4),
              (c[(d + 212) >> 2] = c[k >> 2] << 2),
              (c[(d + 216) >> 2] = f),
              (c[(d + 220) >> 2] = c[k >> 2] << 2),
              (c[(d + 224) >> 2] = f),
              (c[(d + 228) >> 2] = f),
              (c[(d + 232) >> 2] = f),
              (c[(d + 236) >> 2] = f),
              (c[(d + 240) >> 2] = f),
              (c[(d + 244) >> 2] = f),
              (c[(d + 248) >> 2] = f),
              (c[(d + 252) >> 2] = f),
              (c[(d + 256) >> 2] = f),
              (c[(d + 260) >> 2] = f),
              (c[(d + 264) >> 2] = f),
              (c[(d + 268) >> 2] = f),
              (c[(d + 272) >> 2] = c[k >> 2] << 2),
              (c[(d + 276) >> 2] = c[k >> 2] << 2),
              (c[(d + 280) >> 2] = c[k >> 2] << 2),
              (c[(d + 284) >> 2] = c[k >> 2] << 2),
              (c[(d + 288) >> 2] = c[k >> 2] << 2),
              (c[(d + 292) >> 2] = c[k >> 2] << 2),
              0 < (0 | (l = 0 | c[(m = (p + 16) | 0) >> 2])))
            ) {
              for (
                g = 0 | c[(b + 892) >> 2],
                  h = 0 | c[(b + 1048) >> 2],
                  i = 0 | c[(b + 852) >> 2],
                  f = k = j = 0;
                (f = (((15 + (c[(g + (j << 2)) >> 2] << 3)) & -16) + f) | 0),
                  (k =
                    ((1 << c[(h + (c[(i + (j << 2)) >> 2] << 2)) >> 2]) + k) |
                    0),
                  (0 | (j = (j + 1) | 0)) != (0 | l);

              );
              g = k << 2
            } else f = g = 0
            if (
              ((c[(d + 296) >> 2] = 20 * l),
              (c[(d + 300) >> 2] = c[m >> 2] << 2),
              (c[(d + 304) >> 2] = c[m >> 2]),
              (c[(d + 308) >> 2] = c[m >> 2] << 2),
              (c[(d + 312) >> 2] = c[m >> 2] << 2),
              (c[(d + 316) >> 2] = c[m >> 2] << 2),
              (c[(d + 320) >> 2] = f),
              (c[(d + 324) >> 2] = c[m >> 2] << 2),
              (c[(d + 328) >> 2] = c[m >> 2] << 4),
              (c[(d + 332) >> 2] = c[m >> 2] << 4),
              (c[(d + 336) >> 2] = c[m >> 2] << 2),
              (c[(d + 340) >> 2] = c[m >> 2] << 2),
              (c[(d + 344) >> 2] = c[m >> 2] << 2),
              (c[(d + 348) >> 2] = c[m >> 2] << 4),
              (c[(d + 352) >> 2] = c[m >> 2] << 4),
              (c[(d + 356) >> 2] = c[m >> 2] << 2),
              (c[(d + 360) >> 2] = g),
              (c[(d + 364) >> 2] = c[m >> 2] << 2),
              (c[(d + 368) >> 2] = g),
              (c[(d + 372) >> 2] = g),
              (c[(d + 376) >> 2] = g),
              (c[(d + 380) >> 2] = g),
              (c[(d + 384) >> 2] = g),
              (c[(d + 388) >> 2] = g),
              (c[(d + 392) >> 2] = g),
              (c[(d + 396) >> 2] = g),
              (c[(d + 400) >> 2] = g),
              (c[(d + 404) >> 2] = g),
              (c[(d + 408) >> 2] = c[m >> 2] << 2),
              (c[(d + 412) >> 2] = c[m >> 2] << 2),
              (c[(d + 416) >> 2] = c[m >> 2] << 2),
              (c[(d + 420) >> 2] = c[m >> 2] << 2),
              (c[(d + 424) >> 2] = c[m >> 2] << 2),
              (c[(d + 428) >> 2] = c[m >> 2] << 2),
              (n = 0 | c[n >> 2]),
              (c[(d + 432) >> 2] = 52 * (0 | c[(g = (n + 20) | 0) >> 2])),
              (f = (m = 3 < (255 & o)) ? 0 : c[g >> 2] << 2),
              (c[(d + 436) >> 2] = f),
              (c[(d + 440) >> 2] = c[g >> 2] << 2),
              (c[(d + 444) >> 2] = 28 * (0 | c[(n + 52) >> 2])),
              0 < (0 | (j = 0 | c[(p + 48) >> 2])))
            ) {
              for (
                f = 0 | c[(b + 1048) >> 2], i = h = g = 0;
                (h = ((o = 0 | c[(f + (g << 2)) >> 2]) + h) | 0),
                  (i = ((1 << o) + i) | 0),
                  (0 | (g = (g + 1) | 0)) != (0 | j);

              );
              ;(g = h << 2), (f = i << 2)
            } else f = g = 0
            if (
              ((c[(d + 448) >> 2] = 36 * j),
              (c[(d + 452) >> 2] = g),
              (c[(d + 456) >> 2] = f),
              (c[(d + 460) >> 2] = f),
              (c[(d + 488) >> 2] = 28 * (0 | c[(g = (p + 72) | 0) >> 2])),
              0 < (0 | (g = 0 | c[g >> 2])))
            ) {
              for (
                h = 0 | c[(b + 1152) >> 2],
                  i = 0 | c[(b + 1160) >> 2],
                  f = 0 | c[(b + 1164) >> 2],
                  l = k = j = 0;
                (k = (0 | k) < (0 | (o = 0 | c[(h + (j << 2)) >> 2])) ? o : k),
                  (l =
                    (0 |
                      (o =
                        ((0 | c[(i + (j << 2)) >> 2]) -
                          (0 | c[(f + (j << 2)) >> 2])) |
                        0)) <
                    (0 | l)
                      ? l
                      : (o + 1) | 0),
                  (0 | (j = (j + 1) | 0)) != (0 | g);

              );
              ;(g = k << 2), (f = l << 2)
            } else f = g = 0
            if (
              ((c[(d + 492) >> 2] = c[(p + 76) >> 2] << 4),
              (c[(d + 496) >> 2] = f),
              (c[(d + 500) >> 2] = g),
              (c[(d + 504) >> 2] = f),
              0 < (0 | (j = 0 | c[(k = (p + 80) | 0) >> 2])))
            ) {
              for (
                f = 0 | c[(b + 1048) >> 2],
                  g = 0 | c[(b + 1188) >> 2],
                  i = h = 0;
                (i =
                  ((1 << c[(f + (c[(g + (h << 2)) >> 2] << 2)) >> 2]) + i) | 0),
                  (0 | (h = (h + 1) | 0)) != (0 | j);

              );
              f = i << 2
            } else f = 0
            if (
              ((c[(d + 508) >> 2] = 24 * j),
              (c[(d + 512) >> 2] = c[k >> 2] << 2),
              (c[(d + 516) >> 2] = c[k >> 2] << 2),
              (c[(d + 520) >> 2] = f),
              (c[(d + 524) >> 2] = c[k >> 2] << 2),
              (c[(d + 528) >> 2] = f),
              (c[(d + 532) >> 2] = f),
              m)
            ) {
              if (
                ((c[(d + 464) >> 2] = 20 * (0 | c[(n + 120) >> 2])),
                (c[(d + 468) >> 2] = 28 * (0 | c[(n + 100) >> 2])),
                0 < (0 | (i = 0 | c[(p + 104) >> 2])))
              ) {
                for (
                  f = 0 | c[(b + 1080) >> 2], h = g = 0;
                  (h = ((0 | c[(f + (g << 2)) >> 2]) + h) | 0),
                    (0 | (g = (g + 1) | 0)) != (0 | i);

                );
                f = h << 2
              } else f = 0
              ;(c[(d + 472) >> 2] = 48 * i),
                (c[(d + 476) >> 2] = f),
                (c[(d + 480) >> 2] = 12 * (0 | c[(n + 108) >> 2])),
                (c[(d + 484) >> 2] = 12 * (0 | c[(n + 112) >> 2])),
                (f = g = c[(d + 540) >> 2] = 0)
            } else {
              if (0 < (0 | (m = 0 | c[(n = (p + 20) | 0) >> 2]))) {
                ;(k = 0 | c[(b + 948) >> 2]),
                  (l = 0 | c[(b + 952) >> 2]),
                  (i = 0 | c[(b + 1036) >> 2]),
                  (f = j = 0)
                do {
                  if (
                    ((b = 0 | c[(l + (j << 2)) >> 2]),
                    (h =
                      ((g = (i + (c[(k + (j << 2)) >> 2] << 2)) | 0) +
                        (b << 2)) |
                      0),
                    0 < (0 | b))
                  )
                    for (
                      ;
                      (f = ((0 | c[g >> 2]) + f) | 0),
                        (g = (g + 4) | 0) >>> 0 < h >>> 0;

                    );
                } while ((0 | (j = (j + 1) | 0)) != (0 | m))
              } else f = 0
              ;(c[(d + 540) >> 2] = m << 2), (g = f << 2), (f = c[n >> 2] << 2)
            }
            for (
              c[(d + 536) >> 2] = f, c[(d + 544) >> 2] = g, g = f = 0;
              (g =
                ((b = (15 + (0 | c[(p = (d + (f << 2)) | 0) >> 2])) & -16) +
                  (c[p >> 2] = g)) |
                0),
                137 != (0 | (f = (f + 1) | 0));

            );
            c[e >> 2] = g
          }
          function na(b, e, g) {
            ;(b |= 0), (e |= 0), (g |= 0)
            var C,
              D,
              G,
              J,
              M,
              V,
              h = 0,
              i = 0,
              j = 0,
              k = 0,
              l = 0,
              m = 0,
              n = 0,
              o = 0,
              p = 0,
              q = 0,
              s = 0,
              t = 0,
              u = 0,
              v = 0,
              w = 0,
              x = 0,
              y = 0,
              z = 0,
              A = 0,
              B = 0,
              E = 0,
              F = 0,
              H = 0,
              I = 0,
              K = 0,
              L = 0,
              N = 0,
              O = 0,
              P = 0,
              Q = 0,
              R = 0,
              T = 0,
              U = 0,
              W = 0,
              X = 0,
              Y = 0,
              Z = 0,
              _ = S
            if (
              ((S = (S + 560) | 0),
              (H = (_ + 552) | 0),
              (h = ((p = _) + 556) | 0),
              $c(0 | p, 0, 548),
              ma(b, p, h),
              g >>> 0 < (h = 0 | c[h >> 2]) >>> 0)
            )
              return (S = _), (Z = 0) | Z
            if (
              ($c(0 | e, 0, 0 | h),
              (Z = (e + (0 | c[p >> 2])) | 0),
              (c[(D = (Z + 8) | 0) >> 2] = e + (0 | c[(p + 4) >> 2])),
              (c[(Z + 40) >> 2] = e + (0 | c[(p + 8) >> 2])),
              (c[(Z + 44) >> 2] = e + (0 | c[(p + 12) >> 2])),
              (c[(Z + 48) >> 2] = e + (0 | c[(p + 16) >> 2])),
              (c[(E = (Z + 52) | 0) >> 2] = e + (0 | c[(p + 20) >> 2])),
              (c[(F = (Z + 16) | 0) >> 2] = e + (0 | c[(p + 24) >> 2])),
              (c[(Z + 24) >> 2] = e + (0 | c[(p + 28) >> 2])),
              (c[(Z + 28) >> 2] = e + (0 | c[(p + 32) >> 2])),
              (c[(Z + 32) >> 2] = e + (0 | c[(p + 36) >> 2])),
              (c[(Z + 36) >> 2] = e + (0 | c[(p + 40) >> 2])),
              (j = 0 | c[(Y = (b + 704) | 0) >> 2]),
              (c[(G = (Z + 308) | 0) >> 2] = e + (0 | c[(p + 44) >> 2])),
              (c[(Z + 312) >> 2] = e + (0 | c[(p + 48) >> 2])),
              (c[(Z + 316) >> 2] = e + (0 | c[(p + 52) >> 2])),
              (c[(Z + 320) >> 2] = e + (0 | c[(p + 56) >> 2])),
              (c[(Z + 324) >> 2] = e + (0 | c[(p + 60) >> 2])),
              (c[(Z + 328) >> 2] = e + (0 | c[(p + 64) >> 2])),
              (c[(L = (Z + 60) | 0) >> 2] = e + (0 | c[(p + 68) >> 2])),
              (c[(Z + 144) >> 2] = e + (0 | c[(p + 72) >> 2])),
              (c[(Z + 148) >> 2] = e + (0 | c[(p + 76) >> 2])),
              (h = (e + (0 | c[(p + 80) >> 2])) | 0),
              (c[(k = (Z + 152) | 0) >> 2] = h),
              0 < (0 | (j = 0 | c[(j + 8) >> 2])) &&
                ((l = (e + (0 | c[(p + 84) >> 2])) | 0),
                (m = (b + 796) | 0),
                (c[h >> 2] = l),
                1 != (0 | j)))
            )
              for (h = 0, i = 1, g = l; ; ) {
                if (
                  ((g =
                    (g +
                      ((15 + (c[((0 | c[m >> 2]) + (h << 2)) >> 2] << 3)) &
                        -16)) |
                    0),
                  (c[((0 | c[k >> 2]) + (i << 2)) >> 2] = g),
                  (0 | j) <= (0 | (h = (i + 1) | 0)))
                )
                  break
                ;(W = i), (i = h), (h = W)
              }
            if (
              ((c[(Z + 156) >> 2] = e + (0 | c[(p + 88) >> 2])),
              (c[(Z + 160) >> 2] = e + (0 | c[(p + 92) >> 2])),
              (c[(I = (Z + 68) | 0) >> 2] = e + (0 | c[(p + 96) >> 2])),
              (c[(Z + 76) >> 2] = e + (0 | c[(p + 100) >> 2])),
              (c[(Z + 80) >> 2] = e + (0 | c[(p + 104) >> 2])),
              (c[(Z + 84) >> 2] = e + (0 | c[(p + 108) >> 2])),
              (c[(Z + 88) >> 2] = e + (0 | c[(p + 112) >> 2])),
              (c[(Z + 92) >> 2] = e + (0 | c[(p + 116) >> 2])),
              (c[(Z + 96) >> 2] = e + (0 | c[(p + 120) >> 2])),
              (c[(Z + 100) >> 2] = e + (0 | c[(p + 124) >> 2])),
              (c[(Z + 104) >> 2] = e + (0 | c[(p + 128) >> 2])),
              (c[(Z + 108) >> 2] = e + (0 | c[(p + 132) >> 2])),
              (c[(Z + 112) >> 2] = e + (0 | c[(p + 136) >> 2])),
              (c[(Z + 116) >> 2] = e + (0 | c[(p + 140) >> 2])),
              (c[(Z + 120) >> 2] = e + (0 | c[(p + 144) >> 2])),
              (c[(Z + 124) >> 2] = e + (0 | c[(p + 148) >> 2])),
              (c[(Z + 128) >> 2] = e + (0 | c[(p + 152) >> 2])),
              (c[(Z + 132) >> 2] = e + (0 | c[(p + 156) >> 2])),
              (c[(Z + 136) >> 2] = e + (0 | c[(p + 160) >> 2])),
              (c[(Z + 140) >> 2] = e + (0 | c[(p + 164) >> 2])),
              (c[(J = (Z + 168) | 0) >> 2] = e + (0 | c[(p + 168) >> 2])),
              (c[(Z + 264) >> 2] = e + (0 | c[(p + 172) >> 2])),
              (c[(Z + 268) >> 2] = e + (0 | c[(p + 176) >> 2])),
              (c[(Z + 272) >> 2] = e + (0 | c[(p + 180) >> 2])),
              (c[(Z + 276) >> 2] = e + (0 | c[(p + 184) >> 2])),
              (c[(Z + 280) >> 2] = e + (0 | c[(p + 188) >> 2])),
              (c[(Z + 284) >> 2] = e + (0 | c[(p + 192) >> 2])),
              (c[(Z + 288) >> 2] = e + (0 | c[(p + 196) >> 2])),
              (c[(Z + 292) >> 2] = e + (0 | c[(p + 200) >> 2])),
              (c[(Z + 296) >> 2] = e + (0 | c[(p + 204) >> 2])),
              (c[(Z + 300) >> 2] = e + (0 | c[(p + 208) >> 2])),
              (c[(K = (Z + 176) | 0) >> 2] = e + (0 | c[(p + 212) >> 2])),
              (c[(Z + 184) >> 2] = e + (0 | c[(p + 216) >> 2])),
              (c[(Z + 188) >> 2] = e + (0 | c[(p + 220) >> 2])),
              (c[(Z + 192) >> 2] = e + (0 | c[(p + 224) >> 2])),
              (c[(Z + 196) >> 2] = e + (0 | c[(p + 228) >> 2])),
              (c[(Z + 200) >> 2] = e + (0 | c[(p + 232) >> 2])),
              (c[(Z + 204) >> 2] = e + (0 | c[(p + 236) >> 2])),
              (c[(Z + 208) >> 2] = e + (0 | c[(p + 240) >> 2])),
              (c[(Z + 212) >> 2] = e + (0 | c[(p + 244) >> 2])),
              (c[(Z + 216) >> 2] = e + (0 | c[(p + 248) >> 2])),
              (c[(Z + 220) >> 2] = e + (0 | c[(p + 252) >> 2])),
              (c[(Z + 224) >> 2] = e + (0 | c[(p + 256) >> 2])),
              (c[(Z + 228) >> 2] = e + (0 | c[(p + 260) >> 2])),
              (c[(Z + 232) >> 2] = e + (0 | c[(p + 264) >> 2])),
              (c[(Z + 236) >> 2] = e + (0 | c[(p + 268) >> 2])),
              (c[(Z + 240) >> 2] = e + (0 | c[(p + 272) >> 2])),
              (c[(Z + 244) >> 2] = e + (0 | c[(p + 276) >> 2])),
              (c[(Z + 248) >> 2] = e + (0 | c[(p + 280) >> 2])),
              (c[(Z + 252) >> 2] = e + (0 | c[(p + 284) >> 2])),
              (c[(Z + 256) >> 2] = e + (0 | c[(p + 288) >> 2])),
              (c[(Z + 260) >> 2] = e + (0 | c[(p + 292) >> 2])),
              (j = 0 | c[Y >> 2]),
              (c[(O = (Z + 336) | 0) >> 2] = e + (0 | c[(p + 296) >> 2])),
              (c[(Z + 424) >> 2] = e + (0 | c[(p + 300) >> 2])),
              (c[(Z + 432) >> 2] = e + (0 | c[(p + 304) >> 2])),
              (c[(Z + 436) >> 2] = e + (0 | c[(p + 308) >> 2])),
              (c[(Z + 440) >> 2] = e + (0 | c[(p + 312) >> 2])),
              (h = (e + (0 | c[(p + 316) >> 2])) | 0),
              (c[(k = (Z + 444) | 0) >> 2] = h),
              0 < (0 | (j = 0 | c[(j + 16) >> 2])) &&
                ((n = (e + (0 | c[(p + 320) >> 2])) | 0),
                (o = (b + 892) | 0),
                (c[h >> 2] = n),
                1 != (0 | j)))
            )
              for (h = 0, i = 1, g = n; ; ) {
                if (
                  ((g =
                    (g +
                      ((15 + (c[((0 | c[o >> 2]) + (h << 2)) >> 2] << 3)) &
                        -16)) |
                    0),
                  (c[((0 | c[k >> 2]) + (i << 2)) >> 2] = g),
                  (0 | j) <= (0 | (h = (i + 1) | 0)))
                )
                  break
                ;(W = i), (i = h), (h = W)
              }
            if (
              ((c[(Z + 448) >> 2] = e + (0 | c[(p + 324) >> 2])),
              (c[(P = (Z + 452) | 0) >> 2] = e + (0 | c[(p + 328) >> 2])),
              (c[(Q = (Z + 456) | 0) >> 2] = e + (0 | c[(p + 332) >> 2])),
              (c[(Z + 460) >> 2] = e + (0 | c[(p + 336) >> 2])),
              (c[(Z + 464) >> 2] = e + (0 | c[(p + 340) >> 2])),
              (c[(Z + 468) >> 2] = e + (0 | c[(p + 344) >> 2])),
              (c[(Z + 472) >> 2] = e + (0 | c[(p + 348) >> 2])),
              (c[(Z + 476) >> 2] = e + (0 | c[(p + 352) >> 2])),
              (c[(N = (Z + 344) | 0) >> 2] = e + (0 | c[(p + 356) >> 2])),
              (c[(Z + 352) >> 2] = e + (0 | c[(p + 360) >> 2])),
              (c[(Z + 356) >> 2] = e + (0 | c[(p + 364) >> 2])),
              (c[(Z + 360) >> 2] = e + (0 | c[(p + 368) >> 2])),
              (c[(Z + 364) >> 2] = e + (0 | c[(p + 372) >> 2])),
              (c[(Z + 368) >> 2] = e + (0 | c[(p + 376) >> 2])),
              (c[(Z + 372) >> 2] = e + (0 | c[(p + 380) >> 2])),
              (c[(Z + 376) >> 2] = e + (0 | c[(p + 384) >> 2])),
              (c[(Z + 380) >> 2] = e + (0 | c[(p + 388) >> 2])),
              (c[(Z + 384) >> 2] = e + (0 | c[(p + 392) >> 2])),
              (c[(Z + 388) >> 2] = e + (0 | c[(p + 396) >> 2])),
              (c[(Z + 392) >> 2] = e + (0 | c[(p + 400) >> 2])),
              (c[(Z + 396) >> 2] = e + (0 | c[(p + 404) >> 2])),
              (c[(Z + 400) >> 2] = e + (0 | c[(p + 408) >> 2])),
              (c[(Z + 404) >> 2] = e + (0 | c[(p + 412) >> 2])),
              (c[(Z + 408) >> 2] = e + (0 | c[(p + 416) >> 2])),
              (c[(Z + 412) >> 2] = e + (0 | c[(p + 420) >> 2])),
              (c[(Z + 416) >> 2] = e + (0 | c[(p + 424) >> 2])),
              (c[(Z + 420) >> 2] = e + (0 | c[(p + 428) >> 2])),
              (A = 0 | c[(p + 436) >> 2]),
              (C = 0 | c[(p + 440) >> 2]),
              (c[(W = (Z + 544) | 0) >> 2] = e + (0 | c[(p + 432) >> 2])),
              (c[(B = (Z + 548) | 0) >> 2] = e + A),
              (c[(A = (Z + 552) | 0) >> 2] = e + C),
              (c[(C = (Z + 560) | 0) >> 2] = e + (0 | c[(p + 444) >> 2])),
              (h = 0 | c[Y >> 2]),
              (j = (e + (0 | c[(p + 448) >> 2])) | 0),
              (c[(U = (Z + 568) | 0) >> 2] = j),
              0 < (0 | (h = 0 | c[(h + 48) >> 2])))
            )
              for (
                g = 0 | c[(b + 1048) >> 2],
                  k = (e + (0 | c[(p + 452) >> 2])) | 0,
                  m = (e + ((l = 0) | c[(p + 456) >> 2])) | 0,
                  o = (e + (0 | c[(p + 460) >> 2])) | 0;
                ;

              ) {
                if (
                  ((c[(j + ((36 * l) | 0)) >> 2] = k),
                  (c[(j + ((36 * l) | 0) + 16) >> 2] = m),
                  (c[(j + ((36 * l) | 0) + 20) >> 2] = o),
                  (n = 1 << (i = 0 | c[(g + (l << 2)) >> 2])),
                  (0 | (l = (l + 1) | 0)) == (0 | h))
                )
                  break
                ;(k = (k + (i << 2)) | 0),
                  (m = (m + (n << 2)) | 0),
                  (o = (o + (n << 2)) | 0)
              }
            if (
              ((h = 0 | c[Y >> 2]),
              (i = (e + (0 | c[(p + 488) >> 2])) | 0),
              (c[(M = (Z + 484) | 0) >> 2] = i),
              0 < (0 | (h = 0 | c[(h + 72) >> 2])))
            )
              for (
                g = 0 | c[(b + 1152) >> 2],
                  k = (e + ((j = 0) | c[(p + 492) >> 2])) | 0;
                (k =
                  ((c[(i + ((28 * j) | 0) + 12) >> 2] = k) +
                    (c[(g + (j << 2)) >> 2] << 4)) |
                  0),
                  (0 | (j = (j + 1) | 0)) != (0 | h);

              );
            if (
              ((c[(Z + 488) >> 2] = e + (0 | c[(p + 496) >> 2])),
              (c[(Z + 492) >> 2] = e + (0 | c[(p + 500) >> 2])),
              (c[(Z + 496) >> 2] = e + (0 | c[(p + 504) >> 2])),
              (c[(R = (Z + 504) | 0) >> 2] = e + (0 | c[(p + 508) >> 2])),
              (c[(Z + 536) >> 2] = e + (0 | c[(p + 512) >> 2])),
              (c[(T = (Z + 512) | 0) >> 2] = e + (0 | c[(p + 516) >> 2])),
              (c[(Z + 520) >> 2] = e + (0 | c[(p + 520) >> 2])),
              (c[(Z + 524) >> 2] = e + (0 | c[(p + 524) >> 2])),
              (c[(Z + 528) >> 2] = e + (0 | c[(p + 528) >> 2])),
              (c[(Z + 532) >> 2] = e + (0 | c[(p + 532) >> 2])),
              (z = 3 < (0 | d[(V = (b + 4) | 0) >> 0])))
            ) {
              if (
                ((c[(Z + 576) >> 2] = e + (0 | c[(p + 464) >> 2])),
                (c[(Z + 584) >> 2] = e + (0 | c[(p + 468) >> 2])),
                (h = 0 | c[(p + 476) >> 2]),
                (j = 0 | c[Y >> 2]),
                (l = (e + (0 | c[(p + 472) >> 2])) | 0),
                (c[(Z + 592) >> 2] = l),
                0 < (0 | (j = 0 | c[(j + 104) >> 2])))
              )
                for (k = 0 | c[(b + 1080) >> 2], h = (e + h) | 0, g = 0; ; ) {
                  if (
                    ((c[(l + ((48 * g) | 0) + 40) >> 2] = h),
                    (0 | (i = (g + 1) | 0)) == (0 | j))
                  )
                    break
                  ;(h = (h + (c[(k + (g << 2)) >> 2] << 2)) | 0), (g = i)
                }
              ;(c[(Z + 600) >> 2] = e + (0 | c[(p + 480) >> 2])),
                (c[(Z + 608) >> 2] = e + (0 | c[(p + 484) >> 2])),
                (g = 0 | c[Y >> 2]),
                (h = 0 | c[(g + 20) >> 2])
            } else if (
              ((g = 0 | c[(p + 536) >> 2]),
              (i = 0 | c[(p + 544) >> 2]),
              (c[(Z + 616) >> 2] = e + (0 | c[(p + 540) >> 2])),
              (c[(p = (Z + 612) | 0) >> 2] = e + g),
              (g = 0 | c[Y >> 2]),
              0 < (0 | (h = 0 | c[(g + 20) >> 2])))
            )
              for (
                m = (b + 948) | 0,
                  n = (b + 952) | 0,
                  l = (b + 1036) | 0,
                  k = (e + i) | (o = 0);
                ;

              ) {
                if (
                  ((h = 0 | c[((0 | c[m >> 2]) + (o << 2)) >> 2]),
                  (i =
                    ((y = 0 | c[((0 | c[n >> 2]) + (o << 2)) >> 2]) + h) | 0),
                  0 < (0 | y))
                ) {
                  for (
                    g = 0 | c[l >> 2], j = 0;
                    (j = ((0 | c[(g + (h << 2)) >> 2]) + j) | 0),
                      (0 | (h = (h + 1) | 0)) < (0 | i);

                  );
                  ;(h = ((0 | c[p >> 2]) + (o << 2)) | 0),
                    j ? ((g = k), (i = j)) : (X = 27)
                } else (h = ((0 | c[p >> 2]) + (o << 2)) | 0), (X = 27)
                if (
                  (27 == (0 | X) && (i = g = X = 0),
                  (c[h >> 2] = g),
                  (g = 0 | c[Y >> 2]),
                  (0 | (h = 0 | c[(g + 20) >> 2])) <= (0 | (o = (o + 1) | 0)))
                )
                  break
                k = (k + (i << 2)) | 0
              }
            ;(c[Z >> 2] = b),
              (c[(Z + 620) >> 2] = 1),
              (c[(Z + 624) >> 2] = 1 & a[(20 + (0 | c[(b + 708) >> 2])) >> 0]),
              (k = ((c[(Z + 540) >> 2] = h) + -1) | 0)
            a: do {
              if (0 < (0 | h)) {
                if (
                  ((e = 0 | c[W >> 2]),
                  (q = 0 | c[(b + 928) >> 2]),
                  (s = 0 | c[(b + 924) >> 2]),
                  (u = 0 | c[(b + 936) >> 2]),
                  (v = 0 | c[(b + 932) >> 2]),
                  (w = 0 | c[(b + 940) >> 2]),
                  (x = 0 | c[(b + 952) >> 2]),
                  (y = (b + 948) | 0),
                  (p = 0 | c[A >> 2]),
                  (o = (Z + 584) | 0),
                  (n = (b + 956) | 0),
                  !z)
                )
                  for (;;) {
                    if (
                      ((c[(e + ((52 * k) | 0)) >> 2] = 0),
                      (c[(e + ((52 * k) | 0) + 4) >> 2] =
                        c[(i = (q + (k << 2)) | 0) >> 2]),
                      (c[(e + ((52 * k) | 0) + 8) >> 2] =
                        c[(A = (s + (k << 2)) | 0) >> 2]),
                      (f[(e + ((52 * k) | 0) + 12) >> 2] =
                        +f[A >> 2] - +f[i >> 2]),
                      (c[(e + ((52 * k) | 0) + 16) >> 2] =
                        c[(u + (k << 2)) >> 2]),
                      (c[(e + ((52 * k) | 0) + 44) >> 2] =
                        c[(i = (v + (k << 2)) | 0) >> 2]),
                      (t = +r(0.10000000149011612, 0 | c[(w + (k << 2)) >> 2])),
                      (f[(e + ((52 * k) | 0) + 20) >> 2] = t),
                      (f[(e + ((52 * k) | 0) + 24) >> 2] = 1.5 * t),
                      (A = 0 | c[(x + (k << 2)) >> 2]),
                      (j = (c[(e + ((52 * k) | 0) + 32) >> 2] = A)
                        ? ((0 | c[C >> 2]) +
                            ((28 * (0 | c[((0 | c[y >> 2]) + (k << 2)) >> 2])) |
                              0)) |
                          0
                        : 0),
                      (c[(e + ((52 * k) | 0) + 28) >> 2] = j),
                      (c[(e + ((52 * k) | 0) + 48) >> 2] = 1),
                      (c[(p + (k << 2)) >> 2] = c[i >> 2]),
                      !(0 < (0 | k)))
                    )
                      break a
                    k = (k + -1) | 0
                  }
                for (l = 0 | c[(b + 944) >> 2], m = 0 | c[(b + 960) >> 2]; ; ) {
                  if (
                    ((c[(e + ((52 * k) | 0)) >> 2] = c[(l + (k << 2)) >> 2]),
                    (c[(e + ((52 * k) | 0) + 4) >> 2] =
                      c[(j = (q + (k << 2)) | 0) >> 2]),
                    (c[(e + ((52 * k) | 0) + 8) >> 2] =
                      c[(A = (s + (k << 2)) | 0) >> 2]),
                    (f[(e + ((52 * k) | 0) + 12) >> 2] =
                      +f[A >> 2] - +f[j >> 2]),
                    (c[(e + ((52 * k) | 0) + 16) >> 2] =
                      c[(u + (k << 2)) >> 2]),
                    (c[(e + ((52 * k) | 0) + 44) >> 2] =
                      c[(j = (v + (k << 2)) | 0) >> 2]),
                    (t = +r(0.10000000149011612, 0 | c[(w + (k << 2)) >> 2])),
                    (f[(e + ((52 * k) | 0) + 20) >> 2] = t),
                    (f[(e + ((52 * k) | 0) + 24) >> 2] = 1.5 * t),
                    (A = 0 | c[(x + (k << 2)) >> 2]),
                    (i = (c[(e + ((52 * k) | 0) + 32) >> 2] = A)
                      ? ((0 | c[C >> 2]) +
                          ((28 * (0 | c[((0 | c[y >> 2]) + (k << 2)) >> 2])) |
                            0)) |
                        0
                      : 0),
                    (c[(e + ((52 * k) | 0) + 28) >> 2] = i),
                    (A = 0 | c[(m + (k << 2)) >> 2]),
                    (i = (c[(e + ((52 * k) | 0) + 40) >> 2] = A)
                      ? ((0 | c[o >> 2]) +
                          ((28 * (0 | c[((0 | c[n >> 2]) + (k << 2)) >> 2])) |
                            0)) |
                        0
                      : 0),
                    (c[(e + ((52 * k) | 0) + 36) >> 2] = i),
                    (c[(e + ((52 * k) | 0) + 48) >> 2] = 1),
                    (c[(p + (k << 2)) >> 2] = c[j >> 2]),
                    !(0 < (0 | k)))
                  )
                    break
                  k = (k + -1) | 0
                }
              }
            } while (0)
            if (
              (z
                ? ((c[B >> 2] = c[(b + 944) >> 2]), (l = g), (u = b))
                : ($c(0 | c[B >> 2], 0, (h << 2) | 0),
                  (u = 0 | c[Z >> 2]),
                  (l = 0 | c[(u + 704) >> 2])),
              (h = 0 | c[(l + 52) >> 2]),
              0 < (0 | (c[(Z + 556) >> 2] = h)))
            )
              for (
                g = 0 | c[C >> 2],
                  i = 0 | c[(u + 1036) >> 2],
                  j = 0 | c[(u + 1132) >> 2],
                  k = 0 | c[(u + 1032) >> 2];
                (c[(g + ((28 * (h = ((B = h) + -1) | 0)) | 0)) >> 2] =
                  c[(i + (h << 2)) >> 2]),
                  (c[(g + ((28 * h) | 0) + 4) >> 2] =
                    j + (c[(k + (h << 2)) >> 2] << 2)),
                  (c[(g + ((28 * h) | 0) + 8) >> 2] = 0),
                  (f[(g + ((28 * h) | 0) + 12) >> 2] = 0),
                  (c[(g + ((28 * h) | 0) + 16) >> 2] = 0),
                  (c[(g + ((28 * h) | 0) + 20) >> 2] = 1),
                  (c[(g + ((28 * h) | 0) + 24) >> 2] = 1) < (0 | B);

              );
            if (
              ((h = 0 | c[(l + 48) >> 2]), 0 < (0 | (c[(Z + 564) >> 2] = h)))
            ) {
              ;(n = (u + 1048) | 0), (o = (u + 1040) | 0), (m = (u + 1044) | 0)
              do {
                if (
                  ((l = h),
                  (g = 0 | c[U >> 2]),
                  (i =
                    0 | c[((0 | c[n >> 2]) + ((h = (h + -1) | 0) << 2)) >> 2]),
                  0 < (0 | (c[(g + ((36 * h) | 0) + 4) >> 2] = i)))
                )
                  for (
                    j = (g + ((36 * h) | 0)) | 0, k = 0;
                    (c[((0 | c[j >> 2]) + (k << 2)) >> 2] =
                      (0 | c[C >> 2]) +
                      ((28 *
                        (0 |
                          c[
                            ((0 | c[o >> 2]) +
                              (((0 | c[((0 | c[m >> 2]) + (h << 2)) >> 2]) +
                                k) <<
                                2)) >>
                              2
                          ])) |
                        0)),
                      (0 | (k = (k + 1) | 0)) != (0 | i);

                  );
              } while (
                ((c[(g + ((36 * h) | 0) + 8) >> 2] = 1 << i),
                (c[(g + ((36 * h) | 0) + 24) >> 2] = 1),
                (c[(g + ((36 * h) | 0) + 28) >> 2] = 1) < (0 | l))
              )
              ;(u = 0 | c[Z >> 2]), (l = 0 | c[(u + 704) >> 2])
            }
            if (
              ((g = 0 | c[l >> 2]), 0 < (0 | (c[(e = (Z + 4) | 0) >> 2] = g)))
            ) {
              for (
                j = 0 | c[D >> 2],
                  o = 0 | c[U >> 2],
                  p = 0 | c[(u + 720) >> 2],
                  k = 0 | c[(u + 740) >> 2],
                  m = 0 | c[(u + 736) >> 2],
                  n = 0 | c[(u + 732) >> 2],
                  h = 0 | c[E >> 2],
                  i = g;
                (c[(j + ((12 * (i = ((E = i) + -1) | 0)) | 0)) >> 2] =
                  o + ((36 * (0 | c[(p + (i << 2)) >> 2])) | 0)),
                  (c[(j + ((12 * i) | 0) + 4) >> 2] = c[(k + (i << 2)) >> 2]),
                  (c[(j + ((12 * i) | 0) + 8) >> 2] = c[(m + (i << 2)) >> 2]),
                  (f[(h + (i << 2)) >> 2] =
                    0 == (0 | c[(n + (i << 2)) >> 2]) ? 0 : 1),
                  1 < (0 | E);

              );
              for (
                i = 0 | c[F >> 2], h = 0;
                (E =
                  0 |
                  c[
                    (o +
                      ((36 *
                        (0 | c[(p + ((g = ((F = g) + -1) | 0) << 2)) >> 2])) |
                        0) +
                      8) >>
                      2
                  ]),
                  (h = ((c[(i + (g << 2)) >> 2] = E) + h) | 0),
                  1 < (0 | F);

              );
              g = 0 | c[e >> 2]
            } else h = 0
            if (
              ((c[(Z + 20) >> 2] = h),
              (c[(Z + 12) >> 2] = g),
              (h = 0 | c[(l + 4) >> 2]),
              0 < (0 | (c[(Z + 304) >> 2] = h)))
            ) {
              ;(m = (u + 752) | 0),
                (o = (u + 764) | 0),
                (n = (u + 768) | 0),
                (l = (u + 772) | 0),
                (p = (u + 776) | 0),
                (k = (u + 760) | 0)
              do {
                switch (
                  ((j = h),
                  (g = 0 | c[G >> 2]),
                  (c[(g + ((h = (h + -1) | 0) << 5)) >> 2] =
                    (0 | c[U >> 2]) +
                    ((36 * (0 | c[((0 | c[m >> 2]) + (h << 2)) >> 2])) | 0)),
                  (c[(g + (h << 5) + 4) >> 2] =
                    c[((0 | c[o >> 2]) + (h << 2)) >> 2]),
                  (c[(g + (h << 5) + 8) >> 2] =
                    c[((0 | c[n >> 2]) + (h << 2)) >> 2]),
                  (F = 0 | c[((0 | c[l >> 2]) + (h << 2)) >> 2]),
                  (c[(g + (h << 5) + 12) >> 2] = F),
                  (i = 0 | c[((0 | c[p >> 2]) + (h << 2)) >> 2]),
                  (c[(g + (h << 5) + 16) >> 2] = i),
                  (c[(g + (h << 5) + 28) >> 2] =
                    c[((0 | c[k >> 2]) + (h << 2)) >> 2]),
                  0 | F)
                ) {
                  case 0:
                    ;(c[((0 | c[L >> 2]) + ((24 * i) | 0) + 20) >> 2] = h),
                      (c[(g + (h << 5) + 20) >> 2] = 2),
                      (c[(g + (h << 5) + 24) >> 2] = 2)
                    break
                  case 1:
                    ;(c[((0 | c[J >> 2]) + ((12 * i) | 0) + 8) >> 2] = h),
                      (c[(g + (h << 5) + 20) >> 2] = 3),
                      (c[(g + (h << 5) + 24) >> 2] = 3)
                    break
                  default:
                    ia(0, 937, H)
                }
              } while (1 < (0 | j))
              ;(u = 0 | c[Z >> 2]), (B = 0 | c[(u + 704) >> 2])
            } else B = l
            if (
              ((i = 0 | c[(B + 8) >> 2]),
              (h = ((c[(e = (Z + 56) | 0) >> 2] = i) + -1) | 0),
              (p = 0 < (0 | i)))
            )
              if (
                ((j = 0 | c[L >> 2]),
                (k = 0 | c[U >> 2]),
                (l = 0 | c[(u + 780) >> 2]),
                (m = 0 | c[(u + 800) >> 2]),
                (n = 0 | c[(u + 804) >> 2]),
                (o = 0 | c[(u + 796) >> 2]),
                1 < (0 | d[(u + 4) >> 0]))
              )
                for (g = 0 | c[(u + 808) >> 2]; ; ) {
                  if (
                    ((c[(j + ((24 * h) | 0)) >> 2] =
                      k + ((36 * (0 | c[(l + (h << 2)) >> 2])) | 0)),
                    (c[(j + ((24 * h) | 0) + 4) >> 2] = c[(m + (h << 2)) >> 2]),
                    (c[(j + ((24 * h) | 0) + 8) >> 2] = c[(n + (h << 2)) >> 2]),
                    (c[(j + ((24 * h) | 0) + 16) >> 2] =
                      c[(o + (h << 2)) >> 2]),
                    (c[(j + ((24 * h) | 0) + 12) >> 2] =
                      c[(g + (h << 2)) >> 2]),
                    !(0 < (0 | h)))
                  )
                    break
                  h = (h + -1) | 0
                }
              else
                for (;;) {
                  if (
                    ((c[(j + ((24 * h) | 0)) >> 2] =
                      k + ((36 * (0 | c[(l + (h << 2)) >> 2])) | 0)),
                    (c[(j + ((24 * h) | 0) + 4) >> 2] = c[(m + (h << 2)) >> 2]),
                    (c[(j + ((24 * h) | 0) + 8) >> 2] = c[(n + (h << 2)) >> 2]),
                    (c[(j + ((24 * h) | 0) + 16) >> 2] =
                      c[(o + (h << 2)) >> 2]),
                    !((c[(j + ((24 * h) | 0) + 12) >> 2] = 0) < (0 | h)))
                  )
                    break
                  h = (h + -1) | 0
                }
            if (
              ((g = 0 | c[(B + 12) >> 2]),
              0 < (0 | (c[(n = (Z + 164) | 0) >> 2] = g)))
            )
              for (
                h = 0 | c[J >> 2],
                  j = 0 | c[U >> 2],
                  k = 0 | c[(u + 812) >> 2],
                  l = 0 | c[(u + 828) >> 2],
                  m = g;
                (c[(h + ((12 * (m = ((H = m) + -1) | 0)) | 0)) >> 2] =
                  j + ((36 * (0 | c[(k + (m << 2)) >> 2])) | 0)),
                  (c[(h + ((12 * m) | 0) + 4) >> 2] = c[(l + (m << 2)) >> 2]),
                  1 < (0 | H);

              );
            if (p) {
              for (
                j = 0 | c[L >> 2], g = 0 | c[I >> 2], h = 0;
                (I =
                  0 |
                  c[
                    (8 +
                      (0 |
                        c[(j + ((24 * (i = ((L = i) + -1) | 0)) | 0)) >> 2])) >>
                      2
                  ]),
                  (h = ((c[(g + (i << 2)) >> 2] = I) + h) | 0),
                  1 < (0 | L);

              );
              ;(i = 0 | c[e >> 2]), (g = 0 | c[n >> 2])
            } else h = 0
            if (((c[(Z + 72) >> 2] = h), (c[(Z + 64) >> 2] = i), 0 < (0 | g))) {
              for (
                j = 0 | c[J >> 2], i = 0 | c[K >> 2], h = 0;
                (K =
                  0 |
                  c[
                    (8 +
                      (0 |
                        c[(j + ((12 * (g = ((L = g) + -1) | 0)) | 0)) >> 2])) >>
                      2
                  ]),
                  (h = ((c[(i + (g << 2)) >> 2] = K) + h) | 0),
                  1 < (0 | L);

              );
              g = 0 | c[n >> 2]
            } else h = 0
            if (
              ((c[(Z + 180) >> 2] = h),
              (c[(Z + 172) >> 2] = g),
              (g = (u + 704) | 0),
              (h = 0 | c[(B + 16) >> 2]),
              0 < (0 | (c[(e = (Z + 332) | 0) >> 2] = h)))
            ) {
              for (
                i = 0 | c[O >> 2],
                  o = 0 | c[U >> 2],
                  p = 0 | c[(u + 852) >> 2],
                  j = 0 | c[(u + 876) >> 2],
                  k = 0 | c[(u + 880) >> 2],
                  l = 0 | c[(u + 892) >> 2],
                  m = 0 | c[(u + 872) >> 2],
                  n = h;
                (c[(i + ((20 * (n = ((O = n) + -1) | 0)) | 0)) >> 2] =
                  o + ((36 * (0 | c[(p + (n << 2)) >> 2])) | 0)),
                  (c[(i + ((20 * n) | 0) + 4) >> 2] = c[(j + (n << 2)) >> 2]),
                  (c[(i + ((20 * n) | 0) + 8) >> 2] = c[(k + (n << 2)) >> 2]),
                  (c[(i + ((20 * n) | 0) + 16) >> 2] = c[(l + (n << 2)) >> 2]),
                  (c[(i + ((20 * n) | 0) + 12) >> 2] = c[(m + (n << 2)) >> 2]),
                  1 < (0 | O);

              );
              for (
                i = 0 | c[N >> 2], j = 0;
                (N =
                  0 |
                  c[
                    (o +
                      ((36 *
                        (0 | c[(p + ((h = ((O = h) + -1) | 0) << 2)) >> 2])) |
                        0) +
                      8) >>
                      2
                  ]),
                  (j = ((c[(i + (h << 2)) >> 2] = N) + j) | 0),
                  1 < (0 | O);

              );
              if (
                ((h = 0 | c[e >> 2]),
                (c[(Z + 348) >> 2] = j),
                0 < (0 | (c[(Z + 340) >> 2] = h)))
              )
                for (k = 0 | c[P >> 2], i = 0 | c[Q >> 2], j = h << 2; ; ) {
                  if (
                    ((f[(k + ((j = ((Q = j) + -4) | 0) << 2)) >> 2] = 1),
                    (f[(k + ((O = (Q + -3) | 0) << 2)) >> 2] = 1),
                    (f[(k + ((P = (Q + -2) | 0) << 2)) >> 2] = 1),
                    (f[(k + ((Q = (Q + -1) | 0) << 2)) >> 2] = 1),
                    (f[(i + (j << 2)) >> 2] = 0),
                    (f[(i + (O << 2)) >> 2] = 0),
                    ((f[(i + (P << 2)) >> 2] = 0) | h) <=
                      (f[(i + (Q << 2)) >> 2] = 1))
                  )
                    break
                  h = (h + -1) | 0
                }
            } else (c[(Z + 348) >> 2] = 0), (c[(Z + 340) >> 2] = h)
            if (
              ((A = 0 | c[(B + 72) >> 2]), 0 < (0 | (c[(Z + 480) >> 2] = A)))
            ) {
              ;(h = 0 | c[M >> 2]),
                (i = 0 | c[(u + 1152) >> 2]),
                (j = 0 | c[(u + 1156) >> 2]),
                (k = 0 | c[(u + 1160) >> 2]),
                (l = 0 | c[(u + 1164) >> 2]),
                (m = 0 | c[(u + 1148) >> 2]),
                (v = (u + 1172) | 0),
                (x = (u + 1168) | 0),
                (w = (u + 1176) | 0),
                (y = 0)
              do {
                if (
                  ((n = 0 | c[(i + (y << 2)) >> 2]),
                  (c[(h + ((28 * y) | 0) + 4) >> 2] = n),
                  (c[(h + ((28 * y) | 0)) >> 2] = c[(j + (y << 2)) >> 2]),
                  (Q = 0 | c[(k + (y << 2)) >> 2]),
                  (c[(h + ((28 * y) | 0) + 16) >> 2] = Q),
                  (o = 0 | c[(l + (y << 2)) >> 2]),
                  (c[(h + ((28 * y) | 0) + 20) >> 2] = o),
                  (c[(h + ((28 * y) | 0) + 24) >> 2] = Q + 1 - o),
                  (o =
                    (c[(h + ((28 * y) | 0) + 8) >> 2] = 0) |
                    c[(m + (y << 2)) >> 2]),
                  0 < (0 | n))
                )
                  for (
                    p = 0 | c[(h + ((28 * y) | 0) + 12) >> 2],
                      e = 0 | c[v >> 2],
                      q = 0 | c[x >> 2],
                      s = 0 | c[w >> 2],
                      z = 0;
                    (c[(p + (z << 4) + 4) >> 2] =
                      c[(e + ((Q = (z + o) | 0) << 2)) >> 2]),
                      (c[(p + (z << 4)) >> 2] = c[(q + (Q << 2)) >> 2]),
                      (c[(p + (z << 4) + 8) >> 2] = c[(s + (Q << 2)) >> 2]),
                      (0 | (z = (z + 1) | (c[(p + (z << 4) + 12) >> 2] = 0))) !=
                        (0 | n);

                  );
              } while ((0 | (y = (y + 1) | 0)) != (0 | A))
            }
            ;(i = 0 | c[(B + 80) >> 2]), (c[(q = (Z + 500) | 0) >> 2] = i)
            do {
              if (0 < (0 | i)) {
                for (
                  o = 0 | c[R >> 2],
                    p = 0 | c[U >> 2],
                    e = 0 | c[(u + 1188) >> 2],
                    h = 0 | c[(u + 1200) >> 2],
                    j = 0 | c[(u + 1204) >> 2],
                    k = 0 | c[(u + 1212) >> 2],
                    l = 0 | c[(u + 1216) >> 2],
                    m = 0 | c[(u + 1208) >> 2],
                    n = 0 | c[(u + 1220) >> 2];
                  (c[(o + ((24 * (i = ((U = i) + -1) | 0)) | 0)) >> 2] =
                    p + ((36 * (0 | c[(e + (i << 2)) >> 2])) | 0)),
                    (c[(o + ((24 * i) | 0) + 4) >> 2] = c[(h + (i << 2)) >> 2]),
                    (c[(o + ((24 * i) | 0) + 8) >> 2] = c[(j + (i << 2)) >> 2]),
                    (c[(o + ((24 * i) | 0) + 12) >> 2] =
                      c[(k + (i << 2)) >> 2]),
                    (R = 0 | c[(m + (i << 2)) >> 2]),
                    (c[(o + ((24 * i) | 0) + 16) >> 2] = l + (R << 2)),
                    (c[(o + ((24 * i) | 0) + 20) >> 2] = n + (R << 1)),
                    1 < (0 | U);

                );
                if ((0 | (i = 0 | c[q >> 2])) <= 0) {
                  h = 0
                  break
                }
                for (
                  j = 0 | c[T >> 2], h = 0;
                  (T =
                    0 |
                    c[
                      (p +
                        ((36 *
                          (0 | c[(e + ((i = ((U = i) + -1) | 0) << 2)) >> 2])) |
                          0) +
                        8) >>
                        2
                    ]),
                    (h = ((c[(j + (i << 2)) >> 2] = T) + h) | 0),
                    1 < (0 | U);

                );
                i = 0 | c[q >> 2]
              } else h = 0
            } while (0)
            ;(c[(Z + 516) >> 2] = h), (c[(Z + 508) >> 2] = i)
            do {
              if (3 < (0 | d[V >> 0])) {
                if ((255 & (h = 0 | a[(u + 4) >> 0])) < 4) break
                if (
                  ((i = 0 | c[(B + 120) >> 2]),
                  0 < (0 | (c[(Z + 572) >> 2] = i)))
                ) {
                  for (
                    n = 0 | c[(Z + 576) >> 2],
                      o = 0 | c[(u + 1112) >> 2],
                      e = (u + 1124) | 0,
                      p = (u + 1116) | 0,
                      q = (u + 1128) | 0,
                      m = (u + 1120) | 0;
                    (j =
                      -1 <
                      (0 |
                        (h = 0 | c[(o + ((i = ((l = i) + -1) | 0) << 2)) >> 2]))
                        ? ((j = 0 | c[((0 | c[p >> 2]) + (i << 2)) >> 2]),
                          (k = 0 | c[((0 | c[m >> 2]) + (i << 2)) >> 2]),
                          (h = ((0 | c[W >> 2]) + ((52 * h) | 0)) | 0),
                          (g = ((0 | c[e >> 2]) + (j << 2)) | 0),
                          ((0 | c[q >> 2]) + (j << 2)) | 0)
                        : (g = h = k = 0)),
                      (c[(n + ((20 * i) | 0)) >> 2] = h),
                      (c[(n + ((20 * i) | 0) + 4) >> 2] = g),
                      (c[(n + ((20 * i) | 0) + 8) >> 2] = j),
                      (c[(n + ((20 * i) | 0) + 12) >> 2] = k),
                      1 < (0 | l);

                  );
                  if (
                    ((g = 0 | c[Z >> 2]), (255 & (h = 0 | a[(g + 4) >> 0])) < 4)
                  )
                    break
                  g = ((u = g) + 704) | 0
                }
                if (
                  ((i = 0 | c[g >> 2]),
                  (g = 0 | c[(i + 100) >> 2]),
                  0 < (0 | (c[(Z + 580) >> 2] = g)))
                )
                  for (
                    j = 0 | c[(Z + 584) >> 2],
                      k = 0 | c[(u + 1056) >> 2],
                      l = 0 | c[(u + 1132) >> 2],
                      m = 0 | c[(u + 1052) >> 2],
                      n = 0 | c[(u + 1060) >> 2];
                    (c[(j + ((28 * (g = ((X = g) + -1) | 0)) | 0)) >> 2] =
                      c[(k + (g << 2)) >> 2]),
                      (c[(j + ((28 * g) | 0) + 4) >> 2] =
                        l + (c[(m + (g << 2)) >> 2] << 2)),
                      (c[(j + ((28 * g) | 0) + 8) >> 2] =
                        c[(n + (g << 2)) >> 2]),
                      (c[(j + ((28 * g) | 0) + 12) >> 2] = 0),
                      (f[(j + ((28 * g) | 0) + 16) >> 2] = 0),
                      (c[(j + ((28 * g) | 0) + 20) >> 2] = 1),
                      (c[(j + ((28 * g) | 0) + 24) >> 2] = 1) < (0 | X);

                  );
                if (
                  ((g = 0 | c[(i + 104) >> 2]),
                  0 < (0 | (c[(Z + 588) >> 2] = g)))
                ) {
                  ;(p = (Z + 592) | 0),
                    (q = (Z + 584) | 0),
                    (o = (u + 1064) | 0),
                    (s = (u + 1068) | 0),
                    (m = (u + 1080) | 0),
                    (e = (Z + 576) | 0),
                    (n = (u + 1108) | 0),
                    (l = (u + 1076) | 0)
                  do {
                    if (
                      ((k = g),
                      (h = 0 | c[p >> 2]),
                      (c[(h + ((48 * (g = (g + -1) | 0)) | 0)) >> 2] =
                        (0 | c[q >> 2]) +
                        ((28 * (0 | c[((0 | c[o >> 2]) + (g << 2)) >> 2])) |
                          0)),
                      (c[(h + ((48 * g) | 0) + 4) >> 2] =
                        c[((0 | c[s >> 2]) + (g << 2)) >> 2]),
                      (c[(h + ((48 * g) | 0) + 8) >> 2] = 0),
                      (c[(h + ((48 * g) | 0) + 28) >> 2] = 1),
                      (c[(h + ((48 * g) | 0) + 32) >> 2] = 1),
                      (j = 0 | c[((0 | c[m >> 2]) + (g << 2)) >> 2]),
                      0 < (0 | (c[(h + ((48 * g) | 0) + 36) >> 2] = j)))
                    )
                      for (
                        h = (h + ((48 * g) | 0) + 40) | 0, i = 0;
                        (c[((0 | c[h >> 2]) + (i << 2)) >> 2] =
                          (0 | c[e >> 2]) +
                          ((20 *
                            (0 |
                              c[
                                ((0 | c[n >> 2]) +
                                  (((0 | c[((0 | c[l >> 2]) + (g << 2)) >> 2]) +
                                    i) <<
                                    2)) >>
                                  2
                              ])) |
                            0)),
                          (0 | (i = (i + 1) | 0)) != (0 | j);

                      );
                  } while (1 < (0 | k))
                  ;(o = 0 | c[Z >> 2]), (h = 0 | a[(o + 4) >> 0])
                } else o = u
                if (
                  ((n = 0 | c[Y >> 2]),
                  (g = 0 | c[(n + 108) >> 2]),
                  (255 & h) < 4)
                )
                  break
                if (0 < (0 | (c[(Z + 596) >> 2] = g)))
                  for (
                    i = 0 | c[(Z + 600) >> 2],
                      j = 0 | c[(b + 1084) >> 2],
                      k = 0 | c[(b + 1092) >> 2],
                      l = 0 | c[(Z + 592) >> 2],
                      m = 0 | c[(b + 1088) >> 2],
                      h = g;
                    (c[(i + ((12 * (h = ((Y = h) + -1) | 0)) | 0)) >> 2] =
                      c[(j + (h << 2)) >> 2]),
                      (c[(i + ((12 * h) | 0) + 4) >> 2] =
                        c[(k + (h << 2)) >> 2]),
                      (c[(i + ((12 * h) | 0) + 8) >> 2] =
                        l + ((48 * (0 | c[(m + (h << 2)) >> 2])) | 0)),
                      1 < (0 | Y);

                  );
                if (
                  ((h = 0 | c[(n + 112) >> 2]),
                  0 < (0 | (c[(Z + 604) >> 2] = h)))
                )
                  for (
                    i = 0 | c[(Z + 608) >> 2],
                      j = 0 | c[(b + 1096) >> 2],
                      k = 0 | c[(b + 1104) >> 2],
                      l = 0 | c[(Z + 592) >> 2],
                      g = 0 | c[(b + 1100) >> 2];
                    (c[(i + ((12 * (h = ((b = h) + -1) | 0)) | 0)) >> 2] =
                      c[(j + (h << 2)) >> 2]),
                      (c[(i + ((12 * h) | 0) + 4) >> 2] =
                        c[(k + (h << 2)) >> 2]),
                      (c[(i + ((12 * h) | 0) + 8) >> 2] =
                        l + ((48 * (0 | c[(g + (h << 2)) >> 2])) | 0)),
                      1 < (0 | b);

                  );
                if (
                  ((i = 0 | c[(o + 1132) >> 2]),
                  (j = 0 | c[(20 + (0 | c[(o + 704) >> 2])) >> 2]),
                  (k = (Z + 612) | 0),
                  (c[(Z + 616) >> 2] = c[(o + 972) >> 2]),
                  (h = 0 | c[(o + 964) >> 2]),
                  (c[k >> 2] = h),
                  (0 | j) <= 0)
                )
                  break
                if (
                  ((c[h >> 2] = i + (c[c[(g = (o + 968) | 0) >> 2] >> 2] << 2)),
                  1 == (0 | j))
                )
                  break
                for (
                  h = 1;
                  (c[((0 | c[k >> 2]) + (h << 2)) >> 2] =
                    i + (c[((0 | c[g >> 2]) + (h << 2)) >> 2] << 2)),
                    (0 | (h = (h + 1) | 0)) != (0 | j);

                );
              } else {
                if ((0 | c[(B + 20) >> 2]) <= 0) break
                ;(z = (u + 948) | 0),
                  (A = (u + 952) | 0),
                  (w = (Z + 612) | 0),
                  (x = (u + 1032) | 0),
                  (y = (u + 1036) | 0),
                  (s = (u + 1132) | 0),
                  (u = (Z + 616) | 0),
                  (v = 0)
                do {
                  if (
                    ((h = 0 | c[((0 | c[z >> 2]) + (v << 2)) >> 2]),
                    (e =
                      ((b = 0 | c[((0 | c[A >> 2]) + (v << 2)) >> 2]) + h) | 0),
                    (q = 0 | c[((0 | c[w >> 2]) + (v << 2)) >> 2]),
                    0 < (0 | b))
                  ) {
                    ;(o = 0 | c[x >> 2]), (p = 0 | c[y >> 2]), (n = h), (h = 0)
                    do {
                      if (
                        ((i = 0 | c[(o + (n << 2)) >> 2]),
                        (m = ((b = 0 | c[(p + (n << 2)) >> 2]) + i) | 0),
                        0 < (0 | b))
                      ) {
                        l = 0 | c[s >> 2]
                        do {
                          ;(t = +f[(l + (i << 2)) >> 2]),
                            (j = (q + (h << 2)) | 0)
                          b: do {
                            if (0 < (0 | h))
                              for (k = q; ; ) {
                                if (+f[k >> 2] == t) break b
                                if (j >>> 0 <= (k = (k + 4) | 0) >>> 0) {
                                  X = 150
                                  break
                                }
                              }
                            else X = 150
                          } while (0)
                        } while (
                          (150 == (0 | X) &&
                            ((X = 0), (f[j >> 2] = t), (h = (h + 1) | 0)),
                          (0 | (i = (i + 1) | 0)) < (0 | m))
                        )
                      }
                    } while ((0 | (n = (n + 1) | 0)) < (0 | e))
                  } else h = 0
                  !(function (a, b) {
                    a |= 0
                    var h,
                      j,
                      d = 0,
                      e = 0,
                      f = 0,
                      g = 0,
                      i = 0,
                      l = 0,
                      m = S,
                      k = (S = (S + 63) & -64)
                    ;(S = (S + 208) | 0),
                      (f = (b |= 0) << 2),
                      (c[(i = k = (192 + (j = k)) | 0) >> 2] = 1),
                      (c[(i + 4) >> 2] = 0)
                    a: do {
                      if (0 | f) {
                        for (
                          c[(4 + j) >> 2] = 4, d = b = c[j >> 2] = 4, e = 2;
                          ;

                        ) {
                          if (
                            !(
                              (c[(j + (e << 2)) >> 2] = b = (b + 4 + d) | 0) >>>
                                0 <
                              f >>> 0
                            )
                          )
                            break
                          ;(i = d), (d = b), (e = (e + 1) | 0), (b = i)
                        }
                        if (a >>> 0 < (g = (a + f + -4) | 0) >>> 0) {
                          ;(h = g), (i = (4 + k) | 0), (d = a), (e = b = 1)
                          do {
                            do {
                              if (3 != ((3 & b) | 0)) {
                                if (
                                  ((0 |
                                    c[(j + ((f = (e + -1) | 0) << 2)) >> 2]) >>>
                                    0 <
                                  ((h - d) | 0) >>> 0
                                    ? Cc(d, e, j)
                                    : Ec(d, b, 0 | c[i >> 2], e, 0, j),
                                  1 == (0 | e))
                                ) {
                                  Fc(k, 1), (e = 0)
                                  break
                                }
                                Fc(k, f), (e = 1)
                                break
                              }
                            } while (
                              (Cc(d, e, j), Dc(k, 2), (e = (e + 2) | 0), 0)
                            )
                          } while (
                            ((b = 1 | c[k >> 2]),
                            (c[k >> 2] = b),
                            (d = (d + 4) | 0) >>> 0 < g >>> 0)
                          )
                          f = 0 | c[(g = i) >> 2]
                        } else (g = (4 + k) | 0), (f = 0), (d = a), (e = b = 1)
                        for (Ec(d, b, f, e, 0, j), f = (4 + k) | 0; ; ) {
                          if ((1 == (0 | e)) & (1 == (0 | b))) {
                            if (!(0 | c[f >> 2])) break a
                            l = 21
                          } else
                            (0 | e) < 2
                              ? (l = 21)
                              : (Fc(k, 2),
                                (a = (e + -2) | 0),
                                (c[k >> 2] = 7 ^ c[k >> 2]),
                                Dc(k, 1),
                                Ec(
                                  (d +
                                    (0 - (0 | c[(j + (a << 2)) >> 2])) +
                                    -4) |
                                    0,
                                  0 | c[k >> 2],
                                  0 | c[g >> 2],
                                  (e + -1) | 0,
                                  1,
                                  j
                                ),
                                Fc(k, 1),
                                (b = 1 | c[k >> 2]),
                                Ec(
                                  (d = (d + -4) | 0),
                                  (c[k >> 2] = b),
                                  0 | c[g >> 2],
                                  a,
                                  1,
                                  j
                                ),
                                (e = a))
                          21 == (0 | l) &&
                            (Dc(k, (a = (l = 0) | Gc(k))),
                            (b = 0 | c[k >> 2]),
                            (d = (d + -4) | 0),
                            (e = (a + e) | 0))
                        }
                      }
                    } while (0)
                    S = m
                  })(q, h),
                    (c[((0 | c[u >> 2]) + (v << 2)) >> 2] = h),
                    (v = (v + 1) | 0)
                } while ((0 | v) < (0 | c[(20 + (0 | c[g >> 2])) >> 2]))
              }
            } while (0)
            return Jb(Z), (S = _), 0 | Z
          }
          function oa(a, b) {
            return (
              0 |
              ((a = +f[(a |= 0) >> 2]) < (b = +f[(b |= 0) >> 2])
                ? -1
                : (b < a) & 1)
            )
          }
          function pa(b, d) {
            var e = 0 | a[((b |= 0) + 4) >> 0]
            ;(c[(d |= 0) >> 2] = b + (0 | c[(b + 64) >> 2])),
              (c[(d + 4) >> 2] = b + (0 | c[(b + 68) >> 2])),
              (c[(d + 8) >> 2] = b + (0 | c[(b + 72) >> 2])),
              (c[(d + 12) >> 2] = b + (0 | c[(b + 76) >> 2])),
              (c[(d + 16) >> 2] = b + (0 | c[(b + 80) >> 2])),
              (c[(d + 20) >> 2] = b + (0 | c[(b + 84) >> 2])),
              (c[(d + 24) >> 2] = b + (0 | c[(b + 88) >> 2])),
              (c[(d + 28) >> 2] = b + (0 | c[(b + 92) >> 2])),
              (c[(d + 32) >> 2] = b + (0 | c[(b + 96) >> 2])),
              (c[(d + 36) >> 2] = b + (0 | c[(b + 100) >> 2])),
              (c[(d + 40) >> 2] = b + (0 | c[(b + 104) >> 2])),
              (c[(d + 44) >> 2] = b + (0 | c[(b + 108) >> 2])),
              (c[(d + 48) >> 2] = b + (0 | c[(b + 112) >> 2])),
              (c[(d + 52) >> 2] = b + (0 | c[(b + 116) >> 2])),
              (c[(d + 56) >> 2] = b + (0 | c[(b + 120) >> 2])),
              (c[(d + 60) >> 2] = b + (0 | c[(b + 124) >> 2])),
              (c[(d + 64) >> 2] = b + (0 | c[(b + 128) >> 2])),
              (c[(d + 68) >> 2] = b + (0 | c[(b + 132) >> 2])),
              (c[(d + 72) >> 2] = b + (0 | c[(b + 136) >> 2])),
              (c[(d + 76) >> 2] = b + (0 | c[(b + 140) >> 2])),
              (c[(d + 80) >> 2] = b + (0 | c[(b + 144) >> 2])),
              (c[(d + 84) >> 2] = b + (0 | c[(b + 148) >> 2])),
              (c[(d + 92) >> 2] = b + (0 | c[(b + 152) >> 2])),
              (c[(d + 96) >> 2] = b + (0 | c[(b + 156) >> 2])),
              (c[(d + 100) >> 2] = b + (0 | c[(b + 160) >> 2])),
              (c[(d + 108) >> 2] = b + (0 | c[(b + 164) >> 2])),
              (c[(d + 112) >> 2] = b + (0 | c[(b + 168) >> 2])),
              (c[(d + 116) >> 2] = b + (0 | c[(b + 172) >> 2])),
              (c[(d + 124) >> 2] = b + (0 | c[(b + 176) >> 2])),
              (c[(d + 128) >> 2] = b + (0 | c[(b + 180) >> 2])),
              (c[(d + 132) >> 2] = b + (0 | c[(b + 184) >> 2])),
              (c[(d + 136) >> 2] = b + (0 | c[(b + 188) >> 2])),
              (c[(d + 140) >> 2] = b + (0 | c[(b + 192) >> 2])),
              (c[(d + 144) >> 2] = b + (0 | c[(b + 196) >> 2])),
              (c[(d + 148) >> 2] = b + (0 | c[(b + 200) >> 2])),
              (c[(d + 152) >> 2] = b + (0 | c[(b + 204) >> 2])),
              (c[(d + 156) >> 2] = b + (0 | c[(b + 208) >> 2])),
              (c[(d + 164) >> 2] = b + (0 | c[(b + 212) >> 2])),
              (c[(d + 168) >> 2] = b + (0 | c[(b + 216) >> 2])),
              (c[(d + 172) >> 2] = b + (0 | c[(b + 220) >> 2])),
              (c[(d + 176) >> 2] = b + (0 | c[(b + 224) >> 2])),
              (c[(d + 180) >> 2] = b + (0 | c[(b + 228) >> 2])),
              (c[(d + 184) >> 2] = b + (0 | c[(b + 232) >> 2])),
              (c[(d + 188) >> 2] = b + (0 | c[(b + 236) >> 2])),
              (c[(d + 192) >> 2] = b + (0 | c[(b + 240) >> 2])),
              (c[(d + 196) >> 2] = b + (0 | c[(b + 244) >> 2])),
              (c[(d + 200) >> 2] = b + (0 | c[(b + 248) >> 2])),
              (c[(d + 204) >> 2] = b + (0 | c[(b + 252) >> 2])),
              (c[(d + 208) >> 2] = b + (0 | c[(b + 256) >> 2])),
              (c[(d + 212) >> 2] = b + (0 | c[(b + 260) >> 2])),
              (c[(d + 216) >> 2] = b + (0 | c[(b + 264) >> 2])),
              (c[(d + 220) >> 2] = b + (0 | c[(b + 268) >> 2])),
              (c[(d + 224) >> 2] = b + (0 | c[(b + 272) >> 2])),
              (c[(d + 228) >> 2] = b + (0 | c[(b + 276) >> 2])),
              (c[(d + 232) >> 2] = b + (0 | c[(b + 280) >> 2])),
              (c[(d + 236) >> 2] = b + (0 | c[(b + 284) >> 2])),
              (c[(d + 244) >> 2] = b + (0 | c[(b + 288) >> 2])),
              (c[(d + 248) >> 2] = b + (0 | c[(b + 292) >> 2])),
              (c[(d + 272) >> 2] = b + (0 | c[(b + 296) >> 2])),
              (c[(d + 276) >> 2] = b + (0 | c[(b + 300) >> 2])),
              (c[(d + 280) >> 2] = b + (0 | c[(b + 304) >> 2])),
              (c[(d + 284) >> 2] = b + (0 | c[(b + 308) >> 2])),
              (c[(d + 288) >> 2] = b + (0 | c[(b + 312) >> 2])),
              (c[(d + 292) >> 2] = b + (0 | c[(b + 316) >> 2])),
              (c[(d + 296) >> 2] = b + (0 | c[(b + 320) >> 2])),
              (c[(d + 300) >> 2] = b + (0 | c[(b + 324) >> 2])),
              (c[(d + 304) >> 2] = b + (0 | c[(b + 328) >> 2])),
              (c[(d + 308) >> 2] = b + (0 | c[(b + 332) >> 2])),
              (c[(d + 312) >> 2] = b + (0 | c[(b + 336) >> 2])),
              (c[(d + 316) >> 2] = b + (0 | c[(b + 340) >> 2])),
              (c[(d + 320) >> 2] = b + (0 | c[(b + 344) >> 2])),
              (c[(d + 324) >> 2] = b + (0 | c[(b + 348) >> 2])),
              (c[(d + 336) >> 2] = b + (0 | c[(b + 352) >> 2])),
              (c[(d + 340) >> 2] = b + (0 | c[(b + 356) >> 2])),
              (c[(d + 344) >> 2] = b + (0 | c[(b + 360) >> 2])),
              (c[(d + 328) >> 2] = b + (0 | c[(b + 364) >> 2])),
              (c[(d + 332) >> 2] = b + (0 | c[(b + 368) >> 2])),
              (c[(d + 428) >> 2] = b + (0 | c[(b + 372) >> 2])),
              (c[(d + 432) >> 2] = b + (0 | c[(b + 376) >> 2])),
              (c[(d + 436) >> 2] = b + (0 | c[(b + 380) >> 2])),
              (c[(d + 440) >> 2] = b + (0 | c[(b + 384) >> 2])),
              (c[(d + 444) >> 2] = b + (0 | c[(b + 388) >> 2])),
              (c[(d + 448) >> 2] = b + (0 | c[(b + 392) >> 2])),
              (c[(d + 452) >> 2] = b + (0 | c[(b + 396) >> 2])),
              (c[(d + 456) >> 2] = b + (0 | c[(b + 400) >> 2])),
              (c[(d + 460) >> 2] = b + (0 | c[(b + 404) >> 2])),
              (c[(d + 464) >> 2] = b + (0 | c[(b + 408) >> 2])),
              (c[(d + 468) >> 2] = b + (0 | c[(b + 412) >> 2])),
              (c[(d + 472) >> 2] = b + (0 | c[(b + 416) >> 2])),
              (c[(d + 476) >> 2] = b + (0 | c[(b + 420) >> 2])),
              (c[(d + 480) >> 2] = b + (0 | c[(b + 424) >> 2])),
              (c[(d + 484) >> 2] = b + (0 | c[(b + 428) >> 2])),
              (c[(d + 488) >> 2] = b + (0 | c[(b + 432) >> 2])),
              (c[(d + 492) >> 2] = b + (0 | c[(b + 436) >> 2])),
              (c[(d + 496) >> 2] = b + (0 | c[(b + 440) >> 2])),
              (c[(d + 500) >> 2] = b + (0 | c[(b + 444) >> 2])),
              (c[(d + 504) >> 2] = b + (0 | c[(b + 448) >> 2])),
              (c[(d + 508) >> 2] = b + (0 | c[(b + 452) >> 2])),
              (c[(d + 512) >> 2] = b + (0 | c[(b + 456) >> 2])),
              (c[(d + 516) >> 2] = b + (0 | c[(b + 460) >> 2])),
              (c[(d + 520) >> 2] = b + (0 | c[(b + 464) >> 2])),
              (255 & e) <= 1 ||
                ((c[(d + 104) >> 2] = b + (0 | c[(b + 468) >> 2])),
                (255 & e) <= 3 ||
                  ((c[(d + 260) >> 2] = b + (0 | c[(b + 472) >> 2])),
                  (c[(d + 264) >> 2] = b + (0 | c[(b + 476) >> 2])),
                  (c[(d + 268) >> 2] = b + (0 | c[(b + 480) >> 2])),
                  (c[(d + 88) >> 2] = b + (0 | c[(b + 484) >> 2])),
                  (c[(d + 120) >> 2] = b + (0 | c[(b + 488) >> 2])),
                  (c[(d + 160) >> 2] = b + (0 | c[(b + 492) >> 2])),
                  (c[(d + 524) >> 2] = b + (0 | c[(b + 496) >> 2])),
                  (c[(d + 528) >> 2] = b + (0 | c[(b + 500) >> 2])),
                  (c[(d + 532) >> 2] = b + (0 | c[(b + 504) >> 2])),
                  (c[(d + 536) >> 2] = b + (0 | c[(b + 508) >> 2])),
                  (c[(d + 540) >> 2] = b + (0 | c[(b + 512) >> 2])),
                  (c[(d + 544) >> 2] = b + (0 | c[(b + 516) >> 2])),
                  (c[(d + 240) >> 2] = b + (0 | c[(b + 520) >> 2])),
                  (c[(d + 252) >> 2] = b + (0 | c[(b + 524) >> 2])),
                  (c[(d + 256) >> 2] = b + (0 | c[(b + 528) >> 2])),
                  (c[(d + 348) >> 2] = b + (0 | c[(b + 532) >> 2])),
                  (c[(d + 352) >> 2] = b + (0 | c[(b + 536) >> 2])),
                  (c[(d + 356) >> 2] = b + (0 | c[(b + 540) >> 2])),
                  (c[(d + 360) >> 2] = b + (0 | c[(b + 544) >> 2])),
                  (c[(d + 364) >> 2] = b + (0 | c[(b + 548) >> 2])),
                  (c[(d + 368) >> 2] = b + (0 | c[(b + 552) >> 2])),
                  (c[(d + 372) >> 2] = b + (0 | c[(b + 556) >> 2])),
                  (c[(d + 376) >> 2] = b + (0 | c[(b + 560) >> 2])),
                  (c[(d + 380) >> 2] = b + (0 | c[(b + 564) >> 2])),
                  (c[(d + 384) >> 2] = b + (0 | c[(b + 568) >> 2])),
                  (c[(d + 388) >> 2] = b + (0 | c[(b + 572) >> 2])),
                  (c[(d + 392) >> 2] = b + (0 | c[(b + 576) >> 2])),
                  (c[(d + 396) >> 2] = b + (0 | c[(b + 580) >> 2])),
                  (c[(d + 400) >> 2] = b + (0 | c[(b + 584) >> 2])),
                  (c[(d + 404) >> 2] = b + (0 | c[(b + 588) >> 2])),
                  (c[(d + 408) >> 2] = b + (0 | c[(b + 592) >> 2])),
                  (c[(d + 412) >> 2] = b + (0 | c[(b + 596) >> 2])),
                  (c[(d + 416) >> 2] = b + (0 | c[(b + 600) >> 2])),
                  (c[(d + 420) >> 2] = b + (0 | c[(b + 604) >> 2])),
                  (c[(d + 424) >> 2] = b + (0 | c[(b + 608) >> 2]))))
          }
          var W = [
              md,
              function (a) {
                return 0 | A(0, 0 | (a |= 0))
              },
              function (a) {
                return 0
              },
              md,
            ],
            X = [
              function (a, b, c) {
                return x(1), 0
              },
              function (a, b, c) {
                return 0 | B(0, 0 | (a |= 0), 0 | (b |= 0), 0 | (c |= 0))
              },
              function (a, b, d) {
                ;(b |= 0), (d |= 0)
                var e,
                  j,
                  k,
                  m,
                  n,
                  o,
                  f = 0,
                  g = 0,
                  h = 0,
                  p = 0,
                  l = S,
                  i = (S = (S + 63) & -64)
                for (
                  S = (S + 32) | 0,
                    i = (16 + (g = i)) | 0,
                    f = 0 | c[(j = ((a |= 0) + 28) | 0) >> 2],
                    c[g >> 2] = f,
                    f = ((0 | c[(k = (a + 20) | 0) >> 2]) - f) | 0,
                    c[(g + 4) >> 2] = f,
                    c[(g + 8) >> 2] = b,
                    e = (a + 60) | 0,
                    f = (f + (c[(g + 12) >> (h = 2)] = d)) | 0;
                  ;

                ) {
                  if (
                    (0 | f) ==
                    (0 |
                      (b =
                        0 |
                        (function (a) {
                          return (
                            0 |
                            (a =
                              ((a |= 0) << 16) >> 16
                                ? ((c[1026] = 65535 & a), -1)
                                : 0)
                          )
                        })(0 | G(0 | c[e >> 2], 0 | g, 0 | h, 0 | i))
                          ? (c[i >> 2] = -1)
                          : 0 | c[i >> 2]))
                  ) {
                    b = 6
                    break
                  }
                  if ((0 | b) < 0) {
                    b = 8
                    break
                  }
                  ;(p = 0 | c[(g + 4) >> 2]),
                    (c[(n = (m = p >>> 0 < b >>> 0) ? (g + 8) | 0 : g) >> 2] =
                      (0 | c[n >> 2]) + (p = (b - (m ? p : 0)) | 0)),
                    (c[(o = (n + 4) | 0) >> 2] = (0 | c[o >> 2]) - p),
                    (g = n),
                    (h = (h + ((m << 31) >> 31)) | 0),
                    (f = (f - b) | 0)
                }
                return (
                  6 == (0 | b)
                    ? ((p = 0 | c[(a + 44) >> 2]),
                      (c[(a + 16) >> 2] = p + (0 | c[(a + 48) >> 2])),
                      (c[j >> 2] = p),
                      (c[k >> 2] = p))
                    : 8 == (0 | b) &&
                      ((c[(a + 16) >> 2] = 0),
                      (c[j >> 2] = 0),
                      (c[k >> 2] = 0),
                      (c[a >> 2] = 32 | c[a >> 2]),
                      (d = 2 == (0 | h) ? 0 : (d - (0 | c[(g + 4) >> 2])) | 0)),
                  (S = l),
                  0 | d
                )
              },
              function (a, b, d) {
                var e, f
                return (
                  Zc(
                    0 | (f = 0 | c[(e = ((a |= 0) + 20) | 0) >> 2]),
                    0 | (b |= 0),
                    0 |
                      (a =
                        (d |= 0) >>> 0 <
                        (a = ((0 | c[(a + 16) >> 2]) - f) | 0) >>> 0
                          ? d
                          : a)
                  ),
                  (c[e >> 2] = (0 | c[e >> 2]) + a),
                  0 | d
                )
              },
            ],
            Y = [
              od,
              function (a, b, c, d) {
                return (
                  0 |
                  C(0, 0 | (a |= 0), 0 | (b |= 0), 0 | (c |= 0), 0 | (d |= 0))
                )
              },
              function (a, b, c, d) {
                return y(0), 0
              },
              od,
            ],
            Z = [
              function (a) {
                x(3)
              },
              function (a) {
                D(0, 0 | (a |= 0))
              },
            ],
            _ = [
              function (a, b) {
                x(4)
              },
              function (a, b) {
                E(0, 0 | (a |= 0), 0 | (b |= 0))
              },
              function (a, b) {
                var j,
                  e = 0,
                  g = 0,
                  h = 0,
                  i = 0,
                  k = 0,
                  l = 0,
                  m = 0,
                  n = 0,
                  e = 0 | c[(j = ((a |= 0) + 308) | 0) >> 2],
                  g = 0 | c[(a + 316) >> 2],
                  h = 0 | c[(a + 320) >> 2]
                ;-1 ==
                (0 | (i = 0 | c[(k = (e + ((b |= 0) << 5) + 8) | 0) >> 2]))
                  ? ((c[(g + (b << 2)) >> 2] =
                      c[
                        ((0 | c[(a + 148) >> 2]) +
                          (c[(e + (b << 5) + 16) >> 2] << 2)) >>
                          2
                      ]),
                    (f[(h + (b << 2)) >> 2] = 1))
                  : ((m = 0 | c[(l = (e + (b << 5) + 16) | 0) >> 2]),
                    (n = 0 | c[((0 | c[(a + 152) >> 2]) + (m << 2)) >> 2]),
                    $[3 & c[(e + (i << 5) + 24) >> 2]](
                      a,
                      i,
                      n,
                      n,
                      0 | c[((0 | c[(a + 60) >> 2]) + ((24 * m) | 0) + 16) >> 2]
                    ),
                    (k = 0 | c[k >> 2]),
                    (f[(g + (b << 2)) >> 2] =
                      +f[((0 | c[(a + 148) >> 2]) + (c[l >> 2] << 2)) >> 2] *
                      +f[(g + (k << 2)) >> 2]),
                    (c[(h + (b << 2)) >> 2] = c[(h + (k << 2)) >> 2])),
                  (0 | d[(4 + (0 | c[a >> 2])) >> 0]) < 4 ||
                    ((e = 0 | c[j >> 2]),
                    (g = 0 | c[(a + 324) >> 2]),
                    (j = 0 | c[(a + 328) >> 2]),
                    (h = b << 2),
                    (i = c[(e + (b << 5) + 16) >> 2] << 2),
                    -1 == (0 | (e = 0 | c[(e + (b << 5) + 8) >> 2]))
                      ? ((e = 0 | c[(a + 156) >> 2]),
                        (c[(g + (h << 2)) >> 2] = c[(e + (i << 2)) >> 2]),
                        (c[(g + ((b = 1 | h) << 2)) >> 2] =
                          c[(e + ((k = 1 | i) << 2)) >> 2]),
                        (c[(g + ((n = 2 | h) << 2)) >> 2] =
                          c[(e + ((m = 2 | i) << 2)) >> 2]),
                        (f[(g + ((e = 3 | h) << 2)) >> 2] = 1),
                        (l = 0 | c[(a + 160) >> 2]),
                        (c[(j + (h << 2)) >> 2] = c[(l + (i << 2)) >> 2]),
                        (c[(j + (b << 2)) >> 2] = c[(l + (k << 2)) >> 2]),
                        (c[(j + (n << 2)) >> 2] = c[(l + (m << 2)) >> 2]))
                      : ((m = e << 2),
                        (l = ((0 | c[(a + 156) >> 2]) + (i << 2)) | 0),
                        (f[(e = (g + (h << 2)) | 0) >> 2] =
                          +f[l >> 2] * +f[(n = (g + (m << 2)) | 0) >> 2]),
                        (f[(e + 4) >> 2] = +f[(l + 4) >> 2] * +f[(n + 4) >> 2]),
                        (f[(e + 8) >> 2] = +f[(l + 8) >> 2] * +f[(n + 8) >> 2]),
                        (f[(g + ((e = 3 | h) << 2)) >> 2] = 1),
                        (l = ((0 | c[(a + 160) >> 2]) + (i << 2)) | 0),
                        (b = +f[l >> 2]),
                        (k = +f[(m = (j + (m << 2)) | 0) >> 2]),
                        (f[(n = (j + (h << 2)) | 0) >> 2] = b + k - b * k),
                        (k = +f[(l + 4) >> 2]),
                        (b = +f[(m + 4) >> 2]),
                        (f[(n + 4) >> 2] = k + b - k * b),
                        (b = +f[(l + 8) >> 2]),
                        (k = +f[(m + 8) >> 2]),
                        (f[(n + 8) >> 2] = b + k - b * k)),
                    (f[(j + (e << 2)) >> 2] = 1))
              },
              function (a, b) {
                var n,
                  p,
                  q,
                  r,
                  s,
                  t,
                  u,
                  v,
                  w,
                  x,
                  y,
                  z,
                  A,
                  B,
                  C,
                  e = 0,
                  g = 0,
                  h = 0,
                  i = 0,
                  j = 0,
                  k = 0,
                  l = 0,
                  m = 0,
                  o = 0,
                  D = 0,
                  E = 0,
                  F = 0,
                  G = 0,
                  H = S,
                  F = (S = (S + 63) & -64)
                if (
                  ((S = (S + 48) | 0),
                  (u = (F + 8) | 0),
                  (s = (F + 40) | 0),
                  (r = (F + 32) | 0),
                  (q = ((t = F) + 24) | 0),
                  (F = (F + 16) | 0),
                  (e = 0 | c[(y = ((a |= 0) + 308) | 0) >> 2]),
                  (w = 0 | c[(a + 316) >> 2]),
                  (x = 0 | c[(a + 320) >> 2]),
                  -1 ==
                    (0 | (p = 0 | c[(B = (e + ((b |= 0) << 5) + 8) | 0) >> 2])))
                )
                  (G = 0 | c[(e + (b << 5) + 16) >> 2]),
                    (c[(w + (b << 2)) >> 2] =
                      c[((0 | c[(a + 268) >> 2]) + (G << 2)) >> 2]),
                    (c[(x + (b << 2)) >> 2] =
                      c[((0 | c[(a + 272) >> 2]) + (G << 2)) >> 2])
                else {
                  for (
                    v = 0 | c[(C = (e + (b << 5) + 16) | 0) >> 2],
                      j =
                        0 |
                        c[((0 | c[(z = (a + 276) | 0) >> 2]) + (v << 2)) >> 2],
                      c[F >> 2] = j,
                      v =
                        0 |
                        c[((0 | c[(A = (a + 280) | 0) >> 2]) + (v << 2)) >> 2],
                      c[(D = (F + 4) | 0) >> 2] = v,
                      E =
                        1 == (0 | c[(e + (p << 5) + 12) >> 2])
                          ? -10
                          : -0.10000000149011612,
                      c[s >> 2] = j,
                      c[(j = (4 + s) | 0) >> 2] = v,
                      $[3 & c[(v = (e + (p << 5) + 24) | 0) >> 2]](
                        a,
                        p,
                        s,
                        r,
                        1
                      ),
                      h = (4 + q) | 0,
                      e = (4 + r) | 0,
                      g = (t + 4) | 0,
                      i = 9,
                      o = 1;
                    ;

                  ) {
                    if (
                      ((f[q >> 2] = (m = 0 * o) + +f[s >> 2]),
                      (f[h >> 2] = (n = E * o) + +f[j >> 2]),
                      $[3 & c[v >> 2]](a, p, q, t, 1),
                      (l = +f[t >> 2] - +f[r >> 2]),
                      (f[t >> 2] = l),
                      (k = +f[g >> 2] - +f[e >> 2]),
                      (0 != l) | (0 != (f[g >> 2] = k)))
                    )
                      break
                    if (
                      ((f[q >> 2] = +f[s >> 2] - m),
                      (f[h >> 2] = +f[j >> 2] - n),
                      $[3 & c[v >> 2]](a, p, q, t, 1),
                      (k = +f[t >> 2] - +f[r >> 2]),
                      (f[t >> 2] = k),
                      (m = +f[g >> 2] - +f[e >> 2]),
                      (0 != k) | (0 != (f[g >> 2] = m)))
                    ) {
                      G = 6
                      break
                    }
                    if (!i) {
                      G = 8
                      break
                    }
                    ;(i = (i + -1) | 0), (o *= 0.10000000149011612)
                  }
                  6 == (0 | G)
                    ? ((l = -k), (k = -m))
                    : 8 == (0 | G) && (ia(0, 2813, u), (k = l = 0)),
                    (E = (180 * +rb(0, E, l, k)) / 3.1415927410125732),
                    $[3 & c[v >> 2]](a, 0 | c[B >> 2], F, F, 1),
                    (G = 0 | c[C >> 2]),
                    (c[((0 | c[z >> 2]) + (G << 2)) >> 2] = c[F >> 2]),
                    (c[((0 | c[A >> 2]) + (G << 2)) >> 2] = c[D >> 2]),
                    (F = ((0 | c[(a + 284) >> 2]) + (G << 2)) | 0),
                    (f[F >> 2] = +f[F >> 2] - E),
                    (F = 0 | c[B >> 2]),
                    (f[(w + (b << 2)) >> 2] =
                      +f[((0 | c[(a + 268) >> 2]) + (G << 2)) >> 2] *
                      +f[(w + (F << 2)) >> 2]),
                    (G = ((0 | c[(a + 272) >> 2]) + (G << 2)) | 0),
                    (E = +f[G >> 2] * +f[(x + (F << 2)) >> 2]),
                    (f[(x + (b << 2)) >> 2] = E),
                    (f[G >> 2] = E)
                }
                S =
                  ((0 | d[(4 + (0 | c[a >> 2])) >> 0]) < 4 ||
                    ((e = 0 | c[y >> 2]),
                    (g = 0 | c[(a + 324) >> 2]),
                    (j = 0 | c[(a + 328) >> 2]),
                    (h = b << 2),
                    (i = c[(e + (b << 5) + 16) >> 2] << 2),
                    -1 == (0 | (e = 0 | c[(e + (b << 5) + 8) >> 2]))
                      ? ((e = 0 | c[(a + 296) >> 2]),
                        (c[(g + (h << 2)) >> 2] = c[(e + (i << 2)) >> 2]),
                        (c[(g + ((F = 1 | h) << 2)) >> 2] =
                          c[(e + ((D = 1 | i) << 2)) >> 2]),
                        (c[(g + ((b = 2 | h) << 2)) >> 2] =
                          c[(e + ((G = 2 | i) << 2)) >> 2]),
                        (f[(g + ((e = 3 | h) << 2)) >> 2] = 1),
                        (a = 0 | c[(a + 300) >> 2]),
                        (c[(j + (h << 2)) >> 2] = c[(a + (i << 2)) >> 2]),
                        (c[(j + (F << 2)) >> 2] = c[(a + (D << 2)) >> 2]),
                        (c[(j + (b << 2)) >> 2] = c[(a + (G << 2)) >> 2]))
                      : ((F = e << 2),
                        (G = ((0 | c[(a + 296) >> 2]) + (i << 2)) | 0),
                        (f[(e = (g + (h << 2)) | 0) >> 2] =
                          +f[G >> 2] * +f[(b = (g + (F << 2)) | 0) >> 2]),
                        (f[(e + 4) >> 2] = +f[(G + 4) >> 2] * +f[(b + 4) >> 2]),
                        (f[(e + 8) >> 2] = +f[(G + 8) >> 2] * +f[(b + 8) >> 2]),
                        (f[(g + ((e = 3 | h) << 2)) >> 2] = 1),
                        (G = ((0 | c[(a + 300) >> 2]) + (i << 2)) | 0),
                        (o = +f[G >> 2]),
                        (E = +f[(a = (j + (F << 2)) | 0) >> 2]),
                        (f[(b = (j + (h << 2)) | 0) >> 2] = o + E - o * E),
                        (E = +f[(G + 4) >> 2]),
                        (o = +f[(a + 4) >> 2]),
                        (f[(b + 4) >> 2] = E + o - E * o),
                        (o = +f[(G + 8) >> 2]),
                        (E = +f[(a + 8) >> 2]),
                        (f[(b + 8) >> 2] = o + E - o * E)),
                    (f[(j + (e << 2)) >> 2] = 1)),
                  H)
              },
            ],
            $ = [
              function (a, b, c, d, e) {
                x(5)
              },
              function (a, b, c, d, e) {
                F(
                  0,
                  0 | (a |= 0),
                  0 | (b |= 0),
                  0 | (c |= 0),
                  0 | (d |= 0),
                  0 | (e |= 0)
                )
              },
              function (a, b, d, e, h) {
                ;(d |= 0), (e |= 0)
                var B,
                  F,
                  G,
                  H,
                  I,
                  J,
                  K,
                  L,
                  N,
                  O,
                  P,
                  Q,
                  R,
                  T,
                  U,
                  V,
                  W,
                  X,
                  Y,
                  ba,
                  ca,
                  da,
                  ea,
                  i = 0,
                  j = 0,
                  k = 0,
                  l = 0,
                  m = 0,
                  n = 0,
                  o = 0,
                  p = 0,
                  q = 0,
                  r = 0,
                  s = 0,
                  t = 0,
                  u = 0,
                  w = 0,
                  x = 0,
                  y = 0,
                  z = 0,
                  A = 0,
                  C = 0,
                  D = 0,
                  E = 0,
                  M = 0,
                  _ = 0,
                  Z = S
                if (
                  ((S = (S + 32) | 0),
                  (Y = Z),
                  (b =
                    0 |
                    c[
                      ((0 | c[((a |= 0) + 308) >> 2]) + ((b |= 0) << 5) + 16) >>
                        2
                    ]),
                  (i = 0 | c[(a + 60) >> 2]),
                  (R = 0 | c[((0 | c[(a + 152) >> 2]) + (b << 2)) >> 2]),
                  (T = 0 | c[(i + ((24 * b) | 0) + 8) >> 2]),
                  (U = 0 | c[(i + ((24 * b) | 0) + 4) >> 2]),
                  (V = (1 + T) | 0),
                  (0 | (h |= 0)) <= 0)
                )
                  S = Z
                else {
                  ;(W = 0 | T),
                    (X = 0 | U),
                    (Q = 0 == (0 | c[(i + ((24 * b) | 0) + 12) >> 2])),
                    (F = (R + (T << 3)) | 0),
                    (G = (R + ((N = 0 | v(U, V)) << 3)) | 0),
                    (H = (R + ((L = (N + T) | 0) << 3)) | 0),
                    (I = (4 + R) | 0),
                    (J = (R + (T << 3) + 4) | 0),
                    (K = (R + (N << 3) + 4) | 0),
                    (L = (R + (L << 3) + 4) | 0),
                    (P = (T - 1) | 0),
                    (O = (U - 1) | 0),
                    (t =
                      u =
                      w =
                      x =
                      j =
                      k =
                      s =
                      r =
                      q =
                      p =
                      E =
                      D =
                      o =
                      n =
                      m =
                      l =
                      M =
                      A =
                        0)
                  do {
                    ;(y = (B = +f[(d + (M << 3)) >> 2]) * W),
                      (C = (z = +f[(d + (M << 3) + 4) >> 2]) * X),
                      (a = !(1 <= B)),
                      (i = !(1 <= z))
                    do {
                      if (i & a & !(B < 0) & !(z < 0)) {
                        if (
                          ((a = ~~y),
                          (b = ((0 | v(V, (i = ~~C))) + a) | 0),
                          (k = y - (0 | a)),
                          (j = C - (0 | i)),
                          !Q)
                        ) {
                          ;(f[(e + (M << 3)) >> 2] =
                            (y = 1 - j) *
                              ((z = 1 - k) * +f[(R + (b << 3)) >> 2]) +
                            y * (k * +f[(R + ((_ = (b + 1) | 0) << 3)) >> 2]) +
                            j * (z * +f[(R + ((a = (b + V) | 0) << 3)) >> 2]) +
                            j * (k * +f[(R + ((i = (a + 1) | 0) << 3)) >> 2])),
                            (z =
                              y * (z * +f[(R + (b << 3) + 4) >> 2]) +
                              y * (k * +f[(R + (_ << 3) + 4) >> 2]) +
                              j * (z * +f[(R + (a << 3) + 4) >> 2])),
                            (y = j * (k * +f[(R + (i << 3) + 4) >> 2]))
                          break
                        }
                        if (k + j <= 1) {
                          ;(f[(e + (M << 3)) >> 2] =
                            (z = 1 - k - j) * +f[(R + (b << 3)) >> 2] +
                            k * +f[(R + ((i = (b + 1) | 0) << 3)) >> 2] +
                            j * +f[(R + ((_ = (b + V) | 0) << 3)) >> 2]),
                            (z =
                              z * +f[(R + (b << 3) + 4) >> 2] +
                              k * +f[(R + (i << 3) + 4) >> 2]),
                            (y = j * +f[(R + (_ << 3) + 4) >> 2])
                          break
                        }
                        ;(f[(e + (M << 3)) >> 2] =
                          (C = k + -1 + j) *
                            +f[
                              (R + ((a = ((i = (b + V) | 0) + 1) | 0) << 3)) >>
                                2
                            ] +
                          (z = 1 - k) * +f[(R + (i << 3)) >> 2] +
                          (y = 1 - j) *
                            +f[(R + ((_ = (b + 1) | 0) << 3)) >> 2]),
                          (z =
                            C * +f[(R + (a << 3) + 4) >> 2] +
                            z * +f[(R + (i << 3) + 4) >> 2]),
                          (y *= +f[(R + (_ << 3) + 4) >> 2])
                        break
                      }
                      if (
                        (A ||
                          ((ea = +f[R >> 2]),
                          (da = +f[F >> 2]),
                          (ca = +f[G >> 2]),
                          (D = +f[H >> 2]),
                          (ba = +f[I >> 2]),
                          (t = (w = +f[J >> 2]) - (x = +f[K >> 2])),
                          (A = 1),
                          (D = 0.25 * (ea + da + ca + D) - 0.5 * (ea = D - ea)),
                          (E =
                            0.25 * (ba + w + x + (E = +f[L >> 2])) -
                            0.5 * (ba = E - ba)),
                          (x = 0.5 * ((u = da - ca) + ea)),
                          (w = 0.5 * (t + ba)),
                          (u = 0.5 * (ea - u)),
                          (t = 0.5 * (ba - t))),
                        !((z < 3) & (-2 < B) & (B < 3) & (-2 < z)))
                      ) {
                        ;(f[(e + (M << 3)) >> 2] = z * u + (B * x + D)),
                          (z *= t),
                          (y = B * w + E)
                        break
                      }
                      do {
                        if (B <= 0) {
                          if (z <= 0) {
                            ;(l = D - (n = 2 * u)),
                              (m = E - (o = 2 * t)),
                              (n = (r = D - 2 * x) - n),
                              (o = (s = E - 2 * w) - o),
                              (p = +f[R >> 2]),
                              (q = +f[I >> 2]),
                              (k = 0.5 * (2 + B)),
                              (j = 0.5 * (z + 2))
                            break
                          }
                          if (i) {
                            ;(o =
                              (j =
                                0 | (i = (0 | U) == (0 | (i = ~~C)) ? O : i)) /
                              X),
                              (k = (0 | (_ = (i + 1) | 0)) / X),
                              (i = 0 | v(i, V)),
                              (_ = 0 | v(_, V)),
                              (l = +f[(R + (i << 3)) >> 2]),
                              (m = +f[(R + (i << 3) + 4) >> 2]),
                              (n = o * u + (r = D - 2 * x)),
                              (o = o * t + (s = E - 2 * w)),
                              (p = +f[(R + (_ << 3)) >> 2]),
                              (q = +f[(R + (_ << 3) + 4) >> 2]),
                              (r = k * u + r),
                              (s = k * t + s),
                              (k = 0.5 * (2 + B)),
                              (j = C - j)
                            break
                          }
                          ;(l = +f[G >> 2]),
                            (m = +f[K >> 2]),
                            (n = u + (r = D - 2 * x)),
                            (o = t + (s = E - 2 * w)),
                            (p = (j = 3 * u) + D),
                            (q = (k = 3 * t) + E),
                            (r = j + r),
                            (s = k + s),
                            (k = 0.5 * (2 + B)),
                            (j = 0.5 * (z + -1))
                          break
                        }
                        if (((b = z <= 0), a)) {
                          if (b) {
                            ;(l =
                              (m =
                                (0 |
                                  (i =
                                    ((_ = (0 | T) == (0 | (_ = ~~y)) ? P : _) +
                                      1) |
                                    0)) /
                                W) *
                                x +
                              D -
                              (n = 2 * u)),
                              (m = m * w + E - (o = 2 * t)),
                              (n = (p = (k = 0 | _) / W) * x + D - n),
                              (o = p * w + E - o),
                              (p = +f[(R + (i << 3)) >> 2]),
                              (q = +f[(R + (i << 3) + 4) >> 2]),
                              (r = +f[(R + (_ << 3)) >> 2]),
                              (s = +f[(R + (_ << 3) + 4) >> 2]),
                              (k = y - k),
                              (j = 0.5 * (z + 2))
                            break
                          }
                          if (i) {
                            ;(c[Y >> 2] = M),
                              (g[(Y + 8) >> 3] = B),
                              (g[(Y + 16) >> 3] = z),
                              ia(0, 865, Y)
                            break
                          }
                          ;(k = 0 | (_ = (0 | T) == (0 | (_ = ~~y)) ? P : _)),
                            (q = (0 | (i = (_ + 1) | 0)) / W),
                            (l = +f[(R + ((i = (i + N) | 0) << 3)) >> 2]),
                            (m = +f[(R + (i << 3) + 4) >> 2]),
                            (n = +f[(R + ((_ = (_ + N) | 0) << 3)) >> 2]),
                            (o = +f[(R + (_ << 3) + 4) >> 2]),
                            (p = (r = 3 * u) + (q * x + D)),
                            (q = (j = 3 * t) + (q * w + E)),
                            (r += (s = k / W) * x + D),
                            (s = j + (s * w + E)),
                            (k = y - k),
                            (j = 0.5 * (z + -1))
                          break
                        }
                        if (b) {
                          ;(l = (p = 3 * x + D) - (n = 2 * u)),
                            (m = (q = 3 * w + E) - (o = 2 * t)),
                            (n = x + D - n),
                            (o = w + E - o),
                            (r = +f[F >> 2]),
                            (s = +f[J >> 2]),
                            (k = 0.5 * (B - 1)),
                            (j = 0.5 * (z + 2))
                          break
                        }
                        if (i) {
                          ;(m =
                            (j = 0 | (i = (0 | U) == (0 | (i = ~~C)) ? O : i)) /
                            X),
                            (r = (0 | (_ = (i + 1) | 0)) / X),
                            (i = ((0 | v(i, V)) + T) | 0),
                            (_ = ((0 | v(_, V)) + T) | 0),
                            (l = m * u + (p = 3 * x + D)),
                            (m = m * t + (q = 3 * w + E)),
                            (n = +f[(R + (i << 3)) >> 2]),
                            (o = +f[(R + (i << 3) + 4) >> 2]),
                            (p = r * u + p),
                            (q = r * t + q),
                            (r = +f[(R + (_ << 3)) >> 2]),
                            (s = +f[(R + (_ << 3) + 4) >> 2]),
                            (k = 0.5 * (B - 1)),
                            (j = C - j)
                          break
                        }
                        ;(l = u + (p = 3 * x + D)),
                          (m = t + (q = 3 * w + E)),
                          (n = +f[H >> 2]),
                          (o = +f[L >> 2]),
                          (p = (r = 3 * u) + p),
                          (q = (s = 3 * t) + q),
                          (r += x + D),
                          (s += w + E),
                          (k = 0.5 * (B - 1)),
                          (j = 0.5 * (z + -1))
                        break
                      } while (0)
                      if (k + j <= 1) {
                        ;(f[(e + (M << 3)) >> 2] =
                          n + (l - n) * k + (r - n) * j),
                          (z = o + (m - o) * k),
                          (y = (s - o) * j)
                        break
                      }
                      ;(f[(e + (M << 3)) >> 2] =
                        p + (r - p) * (z = 1 - k) + (l - p) * (y = 1 - j)),
                        (z = q + (s - q) * z),
                        (y *= m - q)
                      break
                    } while (0)
                  } while (
                    ((f[(e + (M << 3) + 4) >> 2] = z + y),
                    (0 | (M = (M + 1) | 0)) != (0 | h))
                  )
                  S = Z
                }
              },
              function (a, b, d, e, g) {
                ;(a |= 0), (b |= 0), (d |= 0), (e |= 0), (g |= 0)
                var i,
                  k,
                  n,
                  o,
                  h = 0,
                  j = 0,
                  l = 0,
                  m = 0
                if (
                  ((b = 0 | c[((0 | c[(a + 308) >> 2]) + (b << 5) + 16) >> 2]),
                  (j =
                    (3.1415927410125732 *
                      (+f[((0 | c[(a + 168) >> 2]) + ((12 * b) | 0) + 4) >> 2] +
                        +f[((0 | c[(a + 284) >> 2]) + (b << 2)) >> 2])) /
                    180),
                  (h = +t(j)),
                  (j = +s(j)),
                  (k =
                    (j *= i = +f[((0 | c[(a + 272) >> 2]) + (b << 2)) >> 2]) *
                    (l =
                      0 == (0 | c[((0 | c[(a + 288) >> 2]) + (b << 2)) >> 2])
                        ? 1
                        : -1)),
                  (i =
                    (h *= i) *
                    (m =
                      0 == (0 | c[((0 | c[(a + 292) >> 2]) + (b << 2)) >> 2])
                        ? 1
                        : -1)),
                  (l *= h),
                  (m *= j),
                  (j = +f[((0 | c[(a + 276) >> 2]) + (b << 2)) >> 2]),
                  (h = +f[((0 | c[(a + 280) >> 2]) + (b << 2)) >> 2]),
                  !((0 | g) <= 0))
                )
                  for (
                    b = 0;
                    (o = +f[(d + (b << 3)) >> 2]),
                      (n = +f[(d + (b << 3) + 4) >> 2]),
                      (f[(e + (b << 3)) >> 2] = k * o - i * n + j),
                      (f[(e + (b << 3) + 4) >> 2] = l * o + m * n + h),
                      (0 | (b = (b + 1) | 0)) != (0 | g);

                  );
              },
            ]
          return {
            ___errno_location: function () {
              return 4104
            },
            ___muldi3: Qc,
            ___udivdi3: Vc,
            _bitshift64Lshr: Wc,
            _bitshift64Shl: Xc,
            _csmFree: function (a) {
              Kc((a |= 0))
            },
            _csmGetDrawableConstantFlags: function (a) {
              var b = 0,
                d = S,
                b = (S = (S + 63) & -64)
              return (
                (S = (S + 16) | 0),
                (a |= 0)
                  ? ((b = 0 | c[(888 + (0 | c[a >> 2])) >> 2]), (S = d), 0 | b)
                  : ((c[b >> 2] = 2312),
                    (c[(b + 4) >> 2] = 1827),
                    ia(0, 1664, b),
                    (S = d),
                    (b = 0) | b)
              )
            },
            _csmGetDrawableCount: function (a) {
              var b = 0,
                d = S,
                b = (S = (S + 63) & -64)
              return (
                (S = (S + 16) | 0),
                (a |= 0)
                  ? ((b = 0 | c[(a + 332) >> 2]), (S = d), 0 | b)
                  : ((c[b >> 2] = 2274),
                    (c[(b + 4) >> 2] = 1827),
                    ia(0, 1664, b),
                    (S = d),
                    0 | (b = -1))
              )
            },
            _csmGetDrawableDrawOrders: function (a) {
              var b = 0,
                d = S,
                b = (S = (S + 63) & -64)
              return (
                (S = (S + 16) | 0),
                (a |= 0)
                  ? ((b = 0 | c[(a + 440) >> 2]), (S = d), 0 | b)
                  : ((c[b >> 2] = 2396),
                    (c[(b + 4) >> 2] = 1827),
                    ia(0, 1664, b),
                    (S = d),
                    (b = 0) | b)
              )
            },
            _csmGetDrawableDynamicFlags: function (a) {
              var b = 0,
                d = S,
                b = (S = (S + 63) & -64)
              return (
                (S = (S + 16) | 0),
                (a |= 0)
                  ? ((b = 0 | c[(a + 432) >> 2]), (S = d), 0 | b)
                  : ((c[b >> 2] = 2340),
                    (c[(b + 4) >> 2] = 1827),
                    ia(0, 1664, b),
                    (S = d),
                    (b = 0) | b)
              )
            },
            _csmGetDrawableIds: function (a) {
              var b = 0,
                d = S,
                b = (S = (S + 63) & -64)
              return (
                (S = (S + 16) | 0),
                (a |= 0)
                  ? ((b = 0 | c[(832 + (0 | c[a >> 2])) >> 2]), (S = d), 0 | b)
                  : ((c[b >> 2] = 2294),
                    (c[(b + 4) >> 2] = 1827),
                    ia(0, 1664, b),
                    (S = d),
                    (b = 0) | b)
              )
            },
            _csmGetDrawableIndexCounts: function (a) {
              var b = 0,
                d = S,
                b = (S = (S + 63) & -64)
              return (
                (S = (S + 16) | 0),
                (a |= 0)
                  ? ((b = 0 | c[(904 + (0 | c[a >> 2])) >> 2]), (S = d), 0 | b)
                  : ((c[b >> 2] = 2598),
                    (c[(b + 4) >> 2] = 1827),
                    ia(0, 1664, b),
                    (S = d),
                    (b = 0) | b)
              )
            },
            _csmGetDrawableIndices: function (a) {
              var b = 0,
                d = S,
                b = (S = (S + 63) & -64)
              return (
                (S = (S + 16) | 0),
                (a |= 0)
                  ? ((b = 0 | c[(840 + (0 | c[a >> 2])) >> 2]), (S = d), 0 | b)
                  : ((c[b >> 2] = 2624),
                    (c[(b + 4) >> 2] = 1827),
                    ia(0, 1664, b),
                    (S = d),
                    (b = 0) | b)
              )
            },
            _csmGetDrawableMaskCounts: function (a) {
              var b = 0,
                d = S,
                b = (S = (S + 63) & -64)
              return (
                (S = (S + 16) | 0),
                (a |= 0)
                  ? ((b = 0 | c[(912 + (0 | c[a >> 2])) >> 2]), (S = d), 0 | b)
                  : ((c[b >> 2] = 2472),
                    (c[(b + 4) >> 2] = 1827),
                    ia(0, 1664, b),
                    (S = d),
                    (b = 0) | b)
              )
            },
            _csmGetDrawableMasks: function (a) {
              var b = 0,
                d = S,
                b = (S = (S + 63) & -64)
              return (
                (S = (S + 16) | 0),
                (a |= 0)
                  ? ((b = 0 | c[(844 + (0 | c[a >> 2])) >> 2]), (S = d), 0 | b)
                  : ((c[b >> 2] = 2497),
                    (c[(b + 4) >> 2] = 1827),
                    ia(0, 1664, b),
                    (S = d),
                    (b = 0) | b)
              )
            },
            _csmGetDrawableMultiplyColors: function (a) {
              var b = 0,
                d = S,
                b = (S = (S + 63) & -64)
              return (
                (S = (S + 16) | 0),
                (a |= 0)
                  ? ((b = 0 | c[(a + 452) >> 2]), (S = d), 0 | b)
                  : ((c[b >> 2] = 2646),
                    (c[(b + 4) >> 2] = 1827),
                    ia(0, 1664, b),
                    (S = d),
                    (b = 0) | b)
              )
            },
            _csmGetDrawableOpacities: function (a) {
              var b = 0,
                d = S,
                b = (S = (S + 63) & -64)
              return (
                (S = (S + 16) | 0),
                (a |= 0)
                  ? ((b = 0 | c[(a + 448) >> 2]), (S = d), 0 | b)
                  : ((c[b >> 2] = 2448),
                    (c[(b + 4) >> 2] = 1827),
                    ia(0, 1664, b),
                    (S = d),
                    (b = 0) | b)
              )
            },
            _csmGetDrawableParentPartIndices: function (a) {
              var b = 0,
                d = S,
                b = (S = (S + 63) & -64)
              return (
                (S = (S + 16) | 0),
                (a |= 0)
                  ? ((b = 0 | c[(876 + (0 | c[a >> 2])) >> 2]), (S = d), 0 | b)
                  : ((c[b >> 2] = 2702),
                    (c[(b + 4) >> 2] = 1827),
                    ia(0, 1664, b),
                    (S = d),
                    (b = 0) | b)
              )
            },
            _csmGetDrawableRenderOrders: function (a) {
              var b = 0,
                d = S,
                b = (S = (S + 63) & -64)
              return (
                (S = (S + 16) | 0),
                (a |= 0)
                  ? ((b = 0 | c[(a + 436) >> 2]), (S = d), 0 | b)
                  : ((c[b >> 2] = 2421),
                    (c[(b + 4) >> 2] = 1827),
                    ia(0, 1664, b),
                    (S = d),
                    (b = 0) | b)
              )
            },
            _csmGetDrawableScreenColors: function (a) {
              var b = 0,
                d = S,
                b = (S = (S + 63) & -64)
              return (
                (S = (S + 16) | 0),
                (a |= 0)
                  ? ((b = 0 | c[(a + 456) >> 2]), (S = d), 0 | b)
                  : ((c[b >> 2] = 2675),
                    (c[(b + 4) >> 2] = 1827),
                    ia(0, 1664, b),
                    (S = d),
                    (b = 0) | b)
              )
            },
            _csmGetDrawableTextureIndices: function (a) {
              var b = 0,
                d = S,
                b = (S = (S + 63) & -64)
              return (
                (S = (S + 16) | 0),
                (a |= 0)
                  ? ((b = 0 | c[(884 + (0 | c[a >> 2])) >> 2]), (S = d), 0 | b)
                  : ((c[b >> 2] = 2367),
                    (c[(b + 4) >> 2] = 1827),
                    ia(0, 1664, b),
                    (S = d),
                    (b = 0) | b)
              )
            },
            _csmGetDrawableVertexCounts: function (a) {
              var b = 0,
                d = S,
                b = (S = (S + 63) & -64)
              return (
                (S = (S + 16) | 0),
                (a |= 0)
                  ? ((b = 0 | c[(892 + (0 | c[a >> 2])) >> 2]), (S = d), 0 | b)
                  : ((c[b >> 2] = 2517),
                    (c[(b + 4) >> 2] = 1827),
                    ia(0, 1664, b),
                    (S = d),
                    (b = 0) | b)
              )
            },
            _csmGetDrawableVertexPositions: function (a) {
              var b = 0,
                d = S,
                b = (S = (S + 63) & -64)
              return (
                (S = (S + 16) | 0),
                (a |= 0)
                  ? ((b = 0 | c[(a + 444) >> 2]), (S = d), 0 | b)
                  : ((c[b >> 2] = 2544),
                    (c[(b + 4) >> 2] = 1827),
                    ia(0, 1664, b),
                    (S = d),
                    (b = 0) | b)
              )
            },
            _csmGetDrawableVertexUvs: function (a) {
              var b = 0,
                d = S,
                b = (S = (S + 63) & -64)
              return (
                (S = (S + 16) | 0),
                (a |= 0)
                  ? ((b = 0 | c[(836 + (0 | c[a >> 2])) >> 2]), (S = d), 0 | b)
                  : ((c[b >> 2] = 2574),
                    (c[(b + 4) >> 2] = 1827),
                    ia(0, 1664, b),
                    (S = d),
                    (b = 0) | b)
              )
            },
            _csmGetLatestMocVersion: function () {
              return 4
            },
            _csmGetMocVersion: function (a, b) {
              b |= 0
              var d = S
              return (
                (b = S = (S + 63) & -64),
                (S = (S + 16) | 0),
                (a |= 0)
                  ? ((a = 0 | ta(a)), (S = d), 0 | a)
                  : ((c[b >> 2] = 1681),
                    (c[(b + 4) >> 2] = 1698),
                    ia(0, 1664, b),
                    (S = d),
                    (a = 0) | a)
              )
            },
            _csmGetParameterCount: function (a) {
              var b = 0,
                d = S,
                b = (S = (S + 63) & -64)
              return (
                (S = (S + 16) | 0),
                (a |= 0)
                  ? ((b = 0 | c[(a + 540) >> 2]), (S = d), 0 | b)
                  : ((c[b >> 2] = 2026),
                    (c[(b + 4) >> 2] = 1827),
                    ia(0, 1664, b),
                    (S = d),
                    0 | (b = -1))
              )
            },
            _csmGetParameterDefaultValues: function (a) {
              var b = 0,
                d = S,
                b = (S = (S + 63) & -64)
              return (
                (S = (S + 16) | 0),
                (a |= 0)
                  ? ((b = 0 | c[(932 + (0 | c[a >> 2])) >> 2]), (S = d), 0 | b)
                  : ((c[b >> 2] = 2145),
                    (c[(b + 4) >> 2] = 1827),
                    ia(0, 1664, b),
                    (S = d),
                    (b = 0) | b)
              )
            },
            _csmGetParameterIds: function (a) {
              var b = 0,
                d = S,
                b = (S = (S + 63) & -64)
              return (
                (S = (S + 16) | 0),
                (a |= 0)
                  ? ((b = 0 | c[(916 + (0 | c[a >> 2])) >> 2]), (S = d), 0 | b)
                  : ((c[b >> 2] = 2047),
                    (c[(b + 4) >> 2] = 1827),
                    ia(0, 1664, b),
                    (S = d),
                    (b = 0) | b)
              )
            },
            _csmGetParameterKeyCounts: function (a) {
              var b = 0,
                d = S,
                b = (S = (S + 63) & -64)
              return (
                (S = (S + 16) | 0),
                (a |= 0)
                  ? ((b = 0 | c[(a + 616) >> 2]), (S = d), 0 | b)
                  : ((c[b >> 2] = 2763),
                    (c[(b + 4) >> 2] = 1827),
                    ia(0, 1664, b),
                    (S = d),
                    (b = 0) | b)
              )
            },
            _csmGetParameterKeyValues: function (a) {
              var b = 0,
                d = S,
                b = (S = (S + 63) & -64)
              return (
                (S = (S + 16) | 0),
                (a |= 0)
                  ? ((b = 0 | c[(a + 612) >> 2]), (S = d), 0 | b)
                  : ((c[b >> 2] = 2788),
                    (c[(b + 4) >> 2] = 1827),
                    ia(0, 1664, b),
                    (S = d),
                    (b = 0) | b)
              )
            },
            _csmGetParameterMaximumValues: function (a) {
              var b = 0,
                d = S,
                b = (S = (S + 63) & -64)
              return (
                (S = (S + 16) | 0),
                (a |= 0)
                  ? ((b = 0 | c[(924 + (0 | c[a >> 2])) >> 2]), (S = d), 0 | b)
                  : ((c[b >> 2] = 2116),
                    (c[(b + 4) >> 2] = 1827),
                    ia(0, 1664, b),
                    (S = d),
                    (b = 0) | b)
              )
            },
            _csmGetParameterMinimumValues: function (a) {
              var b = 0,
                d = S,
                b = (S = (S + 63) & -64)
              return (
                (S = (S + 16) | 0),
                (a |= 0)
                  ? ((b = 0 | c[(928 + (0 | c[a >> 2])) >> 2]), (S = d), 0 | b)
                  : ((c[b >> 2] = 2087),
                    (c[(b + 4) >> 2] = 1827),
                    ia(0, 1664, b),
                    (S = d),
                    (b = 0) | b)
              )
            },
            _csmGetParameterTypes: function (a) {
              var b = 0,
                d = S,
                b = (S = (S + 63) & -64)
              return (
                (S = (S + 16) | 0),
                (a |= 0)
                  ? ((b = 0 | c[(a + 548) >> 2]), (S = d), 0 | b)
                  : ((c[b >> 2] = 2066),
                    (c[(b + 4) >> 2] = 1827),
                    ia(0, 1664, b),
                    (S = d),
                    (b = 0) | b)
              )
            },
            _csmGetParameterValues: function (a) {
              var b = 0,
                d = S,
                b = (S = (S + 63) & -64)
              return (
                (S = (S + 16) | 0),
                (a |= 0)
                  ? ((b = 0 | c[(a + 552) >> 2]), (S = d), 0 | b)
                  : ((c[b >> 2] = 2174),
                    (c[(b + 4) >> 2] = 1827),
                    ia(0, 1664, b),
                    (S = d),
                    (b = 0) | b)
              )
            },
            _csmGetPartCount: function (a) {
              var b = 0,
                d = S,
                b = (S = (S + 63) & -64)
              return (
                (S = (S + 16) | 0),
                (a |= 0)
                  ? ((b = 0 | c[(a + 4) >> 2]), (S = d), 0 | b)
                  : ((c[b >> 2] = 2196),
                    (c[(b + 4) >> 2] = 1827),
                    ia(0, 1664, b),
                    (S = d),
                    0 | (b = -1))
              )
            },
            _csmGetPartIds: function (a) {
              var b = 0,
                d = S,
                b = (S = (S + 63) & -64)
              return (
                (S = (S + 16) | 0),
                (a |= 0)
                  ? ((b = 0 | c[(712 + (0 | c[a >> 2])) >> 2]), (S = d), 0 | b)
                  : ((c[b >> 2] = 2212),
                    (c[(b + 4) >> 2] = 1827),
                    ia(0, 1664, b),
                    (S = d),
                    (b = 0) | b)
              )
            },
            _csmGetPartOpacities: function (a) {
              var b = 0,
                d = S,
                b = (S = (S + 63) & -64)
              return (
                (S = (S + 16) | 0),
                (a |= 0)
                  ? ((b = 0 | c[(a + 52) >> 2]), (S = d), 0 | b)
                  : ((c[b >> 2] = 2226),
                    (c[(b + 4) >> 2] = 1827),
                    ia(0, 1664, b),
                    (S = d),
                    (b = 0) | b)
              )
            },
            _csmGetPartParentPartIndices: function (a) {
              var b = 0,
                d = S,
                b = (S = (S + 63) & -64)
              return (
                (S = (S + 16) | 0),
                (a |= 0)
                  ? ((b = 0 | c[(740 + (0 | c[a >> 2])) >> 2]), (S = d), 0 | b)
                  : ((c[b >> 2] = 2246),
                    (c[(b + 4) >> 2] = 1827),
                    ia(0, 1664, b),
                    (S = d),
                    (b = 0) | b)
              )
            },
            _csmGetSizeofModel: Ka,
            _csmGetVersion: function () {
              return 67239940
            },
            _csmHasMocConsistency: function (a, b) {
              b |= 0
              var e,
                d = 0,
                f = 0,
                g = S,
                d = (S = (S + 63) & -64)
              return (
                (S = (S + 32) | 0),
                (f = (d + 16) | 0),
                (e = (d + 8) | 0),
                (a |= 0)
                  ? ((((d = a) + 63) & -64) | 0) != (0 | d)
                    ? ((c[e >> 2] = 1717),
                      (c[(4 + e) >> 2] = 1738),
                      ia(0, 1664, e),
                      (S = g),
                      (f = 0) | f)
                    : 0 | b && (((b + 63) & -64) | 0) == (0 | b)
                    ? ((f = 0 | qa(a, b)), (S = g), 0 | f)
                    : ((c[f >> 2] = 1717),
                      (c[(f + 4) >> 2] = 1770),
                      ia(0, 1664, f),
                      (S = g),
                      (f = 0) | f)
                  : ((c[d >> 2] = 1717),
                    (c[(d + 4) >> 2] = 1698),
                    ia(0, 1664, d),
                    (S = g),
                    (f = 0) | f)
              )
            },
            _csmInitializeAmountOfMemory: function (a) {
              var b = S,
                d = (S = (S + 63) & -64)
              ;(S = (S + 16) | 0),
                Nc(d, 64, (a |= 0)),
                Kc(0 | c[d >> 2]),
                (S = b)
            },
            _csmInitializeModelInPlace: La,
            _csmMalloc: function (a) {
              return 0 | Jc((a |= 0))
            },
            _csmMallocMoc: function (a) {
              var d = S,
                b = (S = (S + 63) & -64)
              return (
                (S = (S + 16) | 0), Nc(b, 64, (a |= 0)), (S = d), 0 | c[b >> 2]
              )
            },
            _csmMallocModelAndInitialize: function (a) {
              var b = 0,
                e = 0,
                f = S,
                b = (S = (S + 63) & -64)
              return (
                (S = (S + 16) | 0),
                0 != (0 | (a |= 0)) && 0 == (0 | Nc(b, 16, (e = 0 | Ka(a))))
                  ? (b = 0 | La(a, (a = 0 | c[b >> 2]), e)) || (Kc(a), (b = 0))
                  : (b = 0),
                (S = f),
                0 | b
              )
            },
            _csmReadCanvasInfo: function (a, b, d, e) {
              ;(b |= 0), (d |= 0), (e |= 0)
              var g,
                h,
                i = 0,
                j = S,
                f = (S = (S + 63) & -64)
              if (
                ((S = (S + 32) | 0),
                (g = (24 + f) | 0),
                (i = (16 + f) | 0),
                (h = (8 + f) | 0),
                (a |= 0))
              )
                return b
                  ? d
                    ? void (S =
                        (e
                          ? ((i = 0 | c[(708 + (0 | c[a >> 2])) >> 2]),
                            (c[b >> 2] = c[(i + 12) >> 2]),
                            (c[(b + 4) >> 2] = c[(i + 16) >> 2]),
                            (c[d >> 2] = c[(i + 4) >> 2]),
                            (c[(d + 4) >> 2] = c[(i + 8) >> 2]),
                            (c[e >> 2] = c[i >> 2]))
                          : ((c[g >> 2] = 1809),
                            (c[(4 + g) >> 2] = 1903),
                            ia(0, 1664, g)),
                        j))
                    : ((c[i >> 2] = 1809),
                      (c[(i + 4) >> 2] = 1874),
                      ia(0, 1664, i),
                      void (S = j))
                  : ((c[h >> 2] = 1809),
                    (c[(4 + h) >> 2] = 1847),
                    ia(0, 1664, h),
                    void (S = j))
              ;(c[f >> 2] = 1809),
                (c[(4 + f) >> 2] = 1827),
                ia(0, 1664, f),
                (S = j)
            },
            _csmResetDrawableDynamicFlags: function (a) {
              var d = S,
                b = (S = (S + 63) & -64)
              ;(S = (S + 16) | 0),
                (S =
                  ((a |= 0)
                    ? (c[(a + 428) >> 2] = 1)
                    : ((c[b >> 2] = 2734),
                      (c[(4 + b) >> 2] = 1827),
                      ia(0, 1664, b)),
                  d))
            },
            _csmReviveMocInPlace: function (a, b) {
              b |= 0
              var e,
                d = 0,
                f = 0,
                g = S,
                d = (S = (S + 63) & -64)
              return (
                (S = (S + 32) | 0),
                (f = (d + 16) | 0),
                (e = (d + 8) | 0),
                (a |= 0)
                  ? ((((d = a) + 63) & -64) | 0) != (0 | d)
                    ? ((c[e >> 2] = 1789),
                      (c[(4 + e) >> 2] = 1738),
                      ia(0, 1664, e),
                      (S = g),
                      (f = 0) | f)
                    : 0 | b && (((b + 63) & -64) | 0) == (0 | b)
                    ? ((f = 0 | sa(a)), (S = g), 0 | f)
                    : ((c[f >> 2] = 1789),
                      (c[(f + 4) >> 2] = 1770),
                      ia(0, 1664, f),
                      (S = g),
                      (f = 0) | f)
                  : ((c[d >> 2] = 1789),
                    (c[(d + 4) >> 2] = 1698),
                    ia(0, 1664, d),
                    (S = g),
                    (f = 0) | f)
              )
            },
            _csmSetLogFunction: function (a) {
              c[1008] = a |= 0
            },
            _csmUpdateModel: function (a) {
              var d = S,
                b = (S = (S + 63) & -64)
              ;(S = (S + 16) | 0),
                (S =
                  ((a |= 0)
                    ? Jb(a)
                    : ((c[b >> 2] = 2011),
                      (c[(4 + b) >> 2] = 1827),
                      ia(0, 1664, b)),
                  d))
            },
            _emscripten_get_sbrk_ptr: Yc,
            _emscripten_replace_memory: function (newBuffer) {
              return (
                (a = new Int8Array(newBuffer)),
                (d = new Uint8Array(newBuffer)),
                (b = new Int16Array(newBuffer)),
                (e = new Uint16Array(newBuffer)),
                (c = new Int32Array(newBuffer)),
                (f = new Float32Array(newBuffer)),
                (g = new Float64Array(newBuffer)),
                !0
              )
            },
            _free: Kc,
            _i64Add: Rc,
            _i64Subtract: Sc,
            _malloc: Jc,
            _memcpy: Zc,
            _memmove: _c,
            _memset: $c,
            dynCall_ii: function (a, b) {
              return 0 | W[3 & (a |= 0)](0 | (b |= 0))
            },
            dynCall_iiii: function (a, b, c, d) {
              return (
                0 | X[3 & (a |= 0)](0 | (b |= 0), 0 | (c |= 0), 0 | (d |= 0))
              )
            },
            dynCall_iiiii: function (a, b, c, d, e) {
              return (
                0 |
                Y[3 & (a |= 0)](
                  0 | (b |= 0),
                  0 | (c |= 0),
                  0 | (d |= 0),
                  0 | (e |= 0)
                )
              )
            },
            dynCall_vi: function (a, b) {
              Z[1 & (a |= 0)](0 | (b |= 0))
            },
            dynCall_vii: function (a, b, c) {
              _[3 & (a |= 0)](0 | (b |= 0), 0 | (c |= 0))
            },
            dynCall_viiiii: function (a, b, c, d, e, f) {
              $[3 & (a |= 0)](
                0 | (b |= 0),
                0 | (c |= 0),
                0 | (d |= 0),
                0 | (e |= 0),
                0 | (f |= 0)
              )
            },
            establishStackSpace: function (a, b) {
              ;(S = a |= 0), (b |= 0)
            },
            stackAlloc: function (a) {
              var b = S
              return (S = ((S = (S + (a |= 0)) | 0) + 15) & -16), 0 | b
            },
            stackRestore: function (a) {
              S = a |= 0
            },
            stackSave: function () {
              return 0 | S
            },
          }
        })(
          {
            Math: Math,
            Int8Array: Int8Array,
            Int16Array: Int16Array,
            Int32Array: Int32Array,
            Uint8Array: Uint8Array,
            Uint16Array: Uint16Array,
            Float32Array: Float32Array,
            Float64Array: Float64Array,
          },
          {
            a: C,
            b: function (a) {
              J = a
            },
            c: function () {
              return J
            },
            d: function (a, c) {
              return I[a](c)
            },
            e: function (a, c, d, f) {
              return I[a](c, d, f)
            },
            f: function (a, c, d, f, g) {
              return I[a](c, d, f, g)
            },
            g: function (a, c) {
              I[a](c)
            },
            h: function (a, c, d) {
              I[a](c, d)
            },
            i: function (a, c, d, f, g, h) {
              I[a](c, d, f, g, h)
            },
            j: function () {
              return pa.apply(null, arguments)
            },
            k: qa,
            l: function (a, c, d) {
              M.set(M.subarray(c, c + d), a)
            },
            m: function (a) {
              if (2130706432 < a) return !1
              for (var c = Math.max(qa(), 16777216); c < a; )
                c =
                  c <= 536870912
                    ? ea(2 * c)
                    : Math.min(ea((3 * c + 2147483648) / 4), 2130706432)
              return !!ra(c)
            },
            n: pa,
            o: function () {
              C('OOM')
            },
            p: function (a) {
              return a
            },
            q: na,
            r: ra,
            s: function () {
              var a = b._fflush
              a && a(0), V[1].length && W(1, 10), V[2].length && W(2, 10)
            },
            t: oa,
            u: function () {
              var a = oa()
              return (
                b.extraStackTrace && (a += '\n' + b.extraStackTrace()), na(a)
              )
            },
            v: 4816,
          },
          buffer
        ),
        sa =
          ((b.___errno_location = q.___errno_location),
          (b.___muldi3 = q.___muldi3),
          (b.___udivdi3 = q.___udivdi3),
          (b._bitshift64Lshr = q._bitshift64Lshr),
          (b._bitshift64Shl = q._bitshift64Shl),
          (b._csmFree = q._csmFree),
          (b._csmGetDrawableConstantFlags = q._csmGetDrawableConstantFlags),
          (b._csmGetDrawableCount = q._csmGetDrawableCount),
          (b._csmGetDrawableDrawOrders = q._csmGetDrawableDrawOrders),
          (b._csmGetDrawableDynamicFlags = q._csmGetDrawableDynamicFlags),
          (b._csmGetDrawableIds = q._csmGetDrawableIds),
          (b._csmGetDrawableIndexCounts = q._csmGetDrawableIndexCounts),
          (b._csmGetDrawableIndices = q._csmGetDrawableIndices),
          (b._csmGetDrawableMaskCounts = q._csmGetDrawableMaskCounts),
          (b._csmGetDrawableMasks = q._csmGetDrawableMasks),
          (b._csmGetDrawableMultiplyColors = q._csmGetDrawableMultiplyColors),
          (b._csmGetDrawableOpacities = q._csmGetDrawableOpacities),
          (b._csmGetDrawableParentPartIndices =
            q._csmGetDrawableParentPartIndices),
          (b._csmGetDrawableRenderOrders = q._csmGetDrawableRenderOrders),
          (b._csmGetDrawableScreenColors = q._csmGetDrawableScreenColors),
          (b._csmGetDrawableTextureIndices = q._csmGetDrawableTextureIndices),
          (b._csmGetDrawableVertexCounts = q._csmGetDrawableVertexCounts),
          (b._csmGetDrawableVertexPositions = q._csmGetDrawableVertexPositions),
          (b._csmGetDrawableVertexUvs = q._csmGetDrawableVertexUvs),
          (b._csmGetLatestMocVersion = q._csmGetLatestMocVersion),
          (b._csmGetMocVersion = q._csmGetMocVersion),
          (b._csmGetParameterCount = q._csmGetParameterCount),
          (b._csmGetParameterDefaultValues = q._csmGetParameterDefaultValues),
          (b._csmGetParameterIds = q._csmGetParameterIds),
          (b._csmGetParameterKeyCounts = q._csmGetParameterKeyCounts),
          (b._csmGetParameterKeyValues = q._csmGetParameterKeyValues),
          (b._csmGetParameterMaximumValues = q._csmGetParameterMaximumValues),
          (b._csmGetParameterMinimumValues = q._csmGetParameterMinimumValues),
          (b._csmGetParameterTypes = q._csmGetParameterTypes),
          (b._csmGetParameterValues = q._csmGetParameterValues),
          (b._csmGetPartCount = q._csmGetPartCount),
          (b._csmGetPartIds = q._csmGetPartIds),
          (b._csmGetPartOpacities = q._csmGetPartOpacities),
          (b._csmGetPartParentPartIndices = q._csmGetPartParentPartIndices),
          (b._csmGetSizeofModel = q._csmGetSizeofModel),
          (b._csmGetVersion = q._csmGetVersion),
          (b._csmHasMocConsistency = q._csmHasMocConsistency),
          (b._csmInitializeAmountOfMemory = q._csmInitializeAmountOfMemory),
          (b._csmInitializeModelInPlace = q._csmInitializeModelInPlace),
          (b._csmMalloc = q._csmMalloc),
          (b._csmMallocMoc = q._csmMallocMoc),
          (b._csmMallocModelAndInitialize = q._csmMallocModelAndInitialize),
          (b._csmReadCanvasInfo = q._csmReadCanvasInfo),
          (b._csmResetDrawableDynamicFlags = q._csmResetDrawableDynamicFlags),
          (b._csmReviveMocInPlace = q._csmReviveMocInPlace),
          (b._csmSetLogFunction = q._csmSetLogFunction),
          (b._csmUpdateModel = q._csmUpdateModel),
          (b._emscripten_get_sbrk_ptr = q._emscripten_get_sbrk_ptr),
          (b._emscripten_replace_memory = q._emscripten_replace_memory)),
        xa =
          ((b._free = q._free),
          (b._i64Add = q._i64Add),
          (b._i64Subtract = q._i64Subtract),
          (b._malloc = q._malloc),
          (b._memcpy = q._memcpy),
          (b._memmove = q._memmove),
          (b._memset = q._memset),
          (b.establishStackSpace = q.establishStackSpace),
          (b.stackAlloc = q.stackAlloc)),
        ya = (b.stackRestore = q.stackRestore),
        za = (b.stackSave = q.stackSave)
      function Z() {
        function a() {
          if (!Y && ((Y = !0), !K)) {
            if (
              (P(ja),
              P(ka),
              b.onRuntimeInitialized && b.onRuntimeInitialized(),
              b.postRun)
            )
              for (
                'function' == typeof b.postRun && (b.postRun = [b.postRun]);
                b.postRun.length;

              ) {
                var a = b.postRun.shift()
                la.unshift(a)
              }
            P(la)
          }
        }
        if (!(0 < Q)) {
          if (b.preRun)
            for (
              'function' == typeof b.preRun && (b.preRun = [b.preRun]);
              b.preRun.length;

            )
              !(function () {
                var a = b.preRun.shift()
                ia.unshift(a)
              })()
          P(ia),
            0 < Q ||
              (b.setStatus
                ? (b.setStatus('Running...'),
                  setTimeout(function () {
                    setTimeout(function () {
                      b.setStatus('')
                    }, 1),
                      a()
                  }, 1))
                : a())
        }
      }
      if (
        ((b.dynCall_ii = q.dynCall_ii),
        (b.dynCall_iiii = q.dynCall_iiii),
        (b.dynCall_iiiii = q.dynCall_iiiii),
        (b.dynCall_vi = q.dynCall_vi),
        (b.dynCall_vii = q.dynCall_vii),
        (b.dynCall_viiiii = q.dynCall_viiiii),
        (b.asm = q),
        (b.ccall = function (a, c, d, f) {
          var g = {
              string: function (a) {
                var c = 0
                if (null != a && 0 !== a) {
                  var d = 1 + (a.length << 2),
                    f = (c = xa(d)),
                    g = M
                  if (0 < d) {
                    for (var d = f + d - 1, h = 0; h < a.length; ++h) {
                      var l = a.charCodeAt(h)
                      if (
                        (l =
                          55296 <= l && l <= 57343
                            ? (65536 + ((1023 & l) << 10)) |
                              (1023 & a.charCodeAt(++h))
                            : l) <= 127
                      ) {
                        if (d <= f) break
                        g[f++] = l
                      } else {
                        if (l <= 2047) {
                          if (d <= f + 1) break
                          g[f++] = 192 | (l >> 6)
                        } else {
                          if (l <= 65535) {
                            if (d <= f + 2) break
                            g[f++] = 224 | (l >> 12)
                          } else {
                            if (d <= f + 3) break
                            ;(g[f++] = 240 | (l >> 18)),
                              (g[f++] = 128 | ((l >> 12) & 63))
                          }
                          g[f++] = 128 | ((l >> 6) & 63)
                        }
                        g[f++] = 128 | (63 & l)
                      }
                    }
                    g[f] = 0
                  }
                }
                return c
              },
              array: function (a) {
                var c = xa(a.length)
                return N.set(a, c), c
              },
            },
            h = (function (a) {
              var c = b['_' + a]
              return (
                assert(
                  c,
                  'Cannot call unknown function ' +
                    a +
                    ', make sure it is exported'
                ),
                c
              )
            })(a),
            p = []
          if (((a = 0), f))
            for (var k = 0; k < f.length; k++) {
              var y = g[d[k]]
              y ? (0 === a && (a = za()), (p[k] = y(f[k]))) : (p[k] = f[k])
            }
          return (
            (d = (function (a) {
              return 'string' === c ? da(a) : 'boolean' === c ? !!a : a
            })((d = h.apply(null, p)))),
            0 !== a && ya(a),
            d
          )
        }),
        (b.UTF8ToString = da),
        (b.addFunction = function (a) {
          for (var c = 0; c < 1; c++) if (!I[c]) return (I[c] = a), 1 + c
          throw 'Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS.'
        }),
        E &&
          ((String.prototype.startsWith
            ? E.startsWith(U)
            : 0 === E.indexOf(U)) ||
            ((n = E), (E = b.locateFile ? b.locateFile(n, u) : u + n)),
          r || t
            ? ((q = x(E)), M.set(q, 8))
            : (Q++,
              b.monitorRunDependencies && b.monitorRunDependencies(Q),
              (F = function (a) {
                a.byteLength && (a = new Uint8Array(a)),
                  M.set(a, 8),
                  b.memoryInitializerRequest &&
                    delete b.memoryInitializerRequest.response,
                  Q--,
                  b.monitorRunDependencies && b.monitorRunDependencies(Q),
                  0 == Q &&
                    (null !== S && (clearInterval(S), (S = null)),
                    T && ((a = T), (T = null), a()))
              }),
              (Ca = function () {
                w(function () {
                  throw 'could not load memory initializer ' + E
                })
              }),
              (u = B(E))
                ? F(u.buffer)
                : b.memoryInitializerRequest
                ? ((n = function () {
                    var a = b.memoryInitializerRequest,
                      c = a.response
                    if (200 !== a.status && 0 !== a.status) {
                      if (!(c = B(b.memoryInitializerRequestURL)))
                        return (
                          console.warn(
                            'a problem seems to have happened with Module.memoryInitializerRequest, status: ' +
                              a.status +
                              ', retrying ' +
                              E
                          ),
                          void Ca()
                        )
                      c = c.buffer
                    }
                    F(c)
                  }),
                  b.memoryInitializerRequest.response
                    ? setTimeout(n, 0)
                    : b.memoryInitializerRequest.addEventListener('load', n))
                : Ca())),
        (b.then = function (a) {
          var c
          return (
            Y
              ? a(b)
              : ((c = b.onRuntimeInitialized),
                (b.onRuntimeInitialized = function () {
                  c && c(), a(b)
                })),
            b
          )
        }),
        (T = function Fa() {
          Y || Z(), Y || (T = Fa)
        }),
        (b.run = Z),
        b.preInit)
      )
        for (
          'function' == typeof b.preInit && (b.preInit = [b.preInit]);
          0 < b.preInit.length;

        )
          b.preInit.pop()()
      return Z(), _em_module
    }
  })()
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = _em_module)
    : 'function' == typeof define && define.amd
    ? define([], function () {
        return _em_module
      })
    : 'object' == typeof exports && (exports._em_module = _em_module)
  var _em = _em_module()
})(Live2DCubismCore || (Live2DCubismCore = {}))
//# sourceMappingURL=live2dcubismcore.js.map
