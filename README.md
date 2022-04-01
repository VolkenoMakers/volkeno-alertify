# Volkeno-Alertify

> ReactJS, awesome notification toast

[![NPM](https://img.shields.io/npm/v/alertify.svg)](https://www.npmjs.com/package/volkeno-alertify) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save volkeno-alertify
```

## Usage

```tsx
import React, { Component } from 'react'

import { VolkenoAlertify } from 'volkeno-alertify'
import 'volkeno-alertify/dist/index.css'

class Example extends Component {
  render() {
    return <VolkenoAlertify
              title="My Title"
              text="My Text"
              duration={5000}
              alertState="success"
              position="left-top"
            />
  }
}
```

## Configuration - Props

| Property                 |   Type   | Require  |  Default | Description                                                                              |
| ------------------------ | :------: | :-----:  | :-------:| :------------------------------------------------------------------------------ |
| alertState               | string   |  true    | sucess   | Toast alert state (success, danger, warning, info)                                       |
| title                    | string   |  true    | ...      |  Toast alert title                                                                        |
| text                     | string   |  true    | ...      |   Toast alert textual message                                                              |
| duration                 | integer  |  false   | 5000     |   Toast alert duration time                                                                |
| position                 | string   |  true    | center   |   Toast UI position on the page (center, bottom-right, bottom-left, top-left, top-right)   |


## License

MIT © [VolkenoMakers](https://github.com/VolkenoMakers)
