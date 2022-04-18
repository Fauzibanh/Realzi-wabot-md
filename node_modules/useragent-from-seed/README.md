# useragent-from-seed
Pick a random User Agent with seed support.

_Results are not truly random. They are based on a list containing Windows, macOS, Android and iOS agents._

## Usage
```js
const useragentFromSeed = require('useragent-from-seed')

// Usage with seed
useragentFromSeed('MY SEED') // Mozilla/5.0 (Windows NT 6.0) AppleWebKit/537.36 ...
useragentFromSeed('MY SEED') // Mozilla/5.0 (Windows NT 6.0) AppleWebKit/537.36 ...

// Usage without seed
useragentFromSeed() // Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_3) AppleWebKit/534.55.3 ...
useragentFromSeed() // Mozilla/5.0 (Linux; U; Android 2.1; en-us; Nexus One Build/ERD62) ...
```

## Credits
All User Agents are taken from [User Agent Switcher](https://addons.mozilla.org/de/firefox/addon/user-agent-switcher/)