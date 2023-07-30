# storybook-host

This library was generated with [Nx](https://nx.dev).

# Usage

1. Run 'docs' target to each project which u need
2. Run 'docs' target on "storybook-host" to host all stories

# Example

//Terminal 1
```bash
pnpx nx docs ui
```
//Terminal 2
```bash
pnpx nx docs merchant
```

//Terminal 3
```bash
pnpx nx docs storybook-host
```

# Issues
- Only works if ports as "same" (e.g. 4200, 4201, 4202 + 4444 on host)

# TODO
- [] Bootstrap by one command
