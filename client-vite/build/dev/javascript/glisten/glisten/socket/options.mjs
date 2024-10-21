import * as $atom from "../../../gleam_erlang/gleam/erlang/atom.mjs";
import * as $dict from "../../../gleam_stdlib/gleam/dict.mjs";
import * as $dynamic from "../../../gleam_stdlib/gleam/dynamic.mjs";
import * as $list from "../../../gleam_stdlib/gleam/list.mjs";
import { toList, CustomType as $CustomType } from "../../gleam.mjs";

export class Binary extends $CustomType {}

export class Once extends $CustomType {}

export class Passive extends $CustomType {}

export class Count extends $CustomType {
  constructor(x0) {
    super();
    this[0] = x0;
  }
}

export class Active extends $CustomType {}

export class Backlog extends $CustomType {
  constructor(x0) {
    super();
    this[0] = x0;
  }
}

export class Nodelay extends $CustomType {
  constructor(x0) {
    super();
    this[0] = x0;
  }
}

export class Linger extends $CustomType {
  constructor(x0) {
    super();
    this[0] = x0;
  }
}

export class SendTimeout extends $CustomType {
  constructor(x0) {
    super();
    this[0] = x0;
  }
}

export class SendTimeoutClose extends $CustomType {
  constructor(x0) {
    super();
    this[0] = x0;
  }
}

export class Reuseaddr extends $CustomType {
  constructor(x0) {
    super();
    this[0] = x0;
  }
}

export class ActiveMode extends $CustomType {
  constructor(x0) {
    super();
    this[0] = x0;
  }
}

export class Mode extends $CustomType {
  constructor(x0) {
    super();
    this[0] = x0;
  }
}

export class Certfile extends $CustomType {
  constructor(x0) {
    super();
    this[0] = x0;
  }
}

export class Keyfile extends $CustomType {
  constructor(x0) {
    super();
    this[0] = x0;
  }
}

export class AlpnPreferredProtocols extends $CustomType {
  constructor(x0) {
    super();
    this[0] = x0;
  }
}

export class Inet6 extends $CustomType {}

export class Buffer extends $CustomType {
  constructor(x0) {
    super();
    this[0] = x0;
  }
}

export const default_options = /* @__PURE__ */ toList([
  /* @__PURE__ */ new Backlog(1024),
  /* @__PURE__ */ new Nodelay(true),
  /* @__PURE__ */ new SendTimeout(30_000),
  /* @__PURE__ */ new SendTimeoutClose(true),
  /* @__PURE__ */ new Reuseaddr(true),
  /* @__PURE__ */ new Mode(/* @__PURE__ */ new Binary()),
  /* @__PURE__ */ new ActiveMode(/* @__PURE__ */ new Passive()),
]);