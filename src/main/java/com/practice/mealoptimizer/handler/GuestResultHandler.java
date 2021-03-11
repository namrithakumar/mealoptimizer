package com.practice.mealoptimizer.handler;

import org.springframework.stereotype.Component;

@Component("guestResultHandler")
public class GuestResultHandler implements ResultHandler {
    //This handler uses the default handleResult, we implement a GuestHandler if we need to add additional logic for Guest result handling (such as storing Guest Orders into DB for analytics) in the future.
}