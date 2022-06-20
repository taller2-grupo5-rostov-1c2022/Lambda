## Metrics Event

updates some metric data on our metrics collection ( firestore )

### Events

- password reset

### API Parameters

- `type`: type of event being triggered
- `payload`?: depends on the type of event

#### Password Reset

```
{
  type: "passwordReset",
  payload: {
    email: "email@domain",
  },
}
```
