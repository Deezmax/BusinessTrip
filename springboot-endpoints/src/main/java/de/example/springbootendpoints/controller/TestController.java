package de.example.springbootendpoints.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("/api/test")
public class TestController {

    @GetMapping("/example")
    public boolean getTest() {
        return true;
    }

    @PostMapping("/example")
    public boolean setTest() {
        return true;
    }
}
