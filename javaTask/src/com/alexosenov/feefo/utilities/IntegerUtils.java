package com.alexosenov.feefo.utilities;

import java.util.Arrays;

public class IntegerUtils {

    public static int min(int... numbers) {
        return Arrays.stream(numbers)
                .min().orElse(Integer.MAX_VALUE);
    }
}
