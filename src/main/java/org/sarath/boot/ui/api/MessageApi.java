package org.sarath.boot.ui.api;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by Sarath Muraleedharan on 25-08-2016.
 */
@RestController
@RequestMapping("/api")
public class MessageApi {
    @RequestMapping("/message")
    public Object getMessage() {
        Map<String, Object> response = new HashMap<>();
        response.put("message", "Welcome to Spring Boot");
        return response;
    }
}
