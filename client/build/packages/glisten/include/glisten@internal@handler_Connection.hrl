-record(connection, {
    client_ip :: {ok, {glisten@transport:ip_address(), integer()}} |
        {error, nil},
    socket :: glisten@socket:socket(),
    transport :: glisten@transport:transport(),
    sender :: gleam@erlang@process:subject(glisten@internal@handler:message(any()))
}).