# superagent-authorization

## Installation

```bash
npm install -S superagent-authorization
```

## Usage

```javascript
const { Basic, Bearer } = require('superagent-authorization');
const superagent = require('superagent');

superagent.get('/resources')
  .use(Basic("my-username", "my-password"))
  .end();
  
superagent.post('/resources')
  .use(Bearer("my-token"))
  .end();  
```
