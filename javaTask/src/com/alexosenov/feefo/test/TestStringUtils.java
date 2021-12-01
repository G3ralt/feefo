package com.alexosenov.feefo.test;

import com.alexosenov.feefo.constants.JobTitle;
import com.alexosenov.feefo.utilities.StringUtils;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Assertions;

public class TestStringUtils {

    @Test
    public void testNormalize() {
        Assertions.assertEquals(StringUtils.normalizeJobTitle("Java Engineer"), JobTitle.SOFTWARE_ENGINEER);
        Assertions.assertEquals(StringUtils.normalizeJobTitle("Structural Architect"), JobTitle.ARCHITECT);
        Assertions.assertEquals(StringUtils.normalizeJobTitle("Quantity Specialist"), JobTitle.QUANTITY_SURVEYOR);
        Assertions.assertEquals(StringUtils.normalizeJobTitle("Junior Accountant"), JobTitle.ACCOUNTANT);

    }
}
