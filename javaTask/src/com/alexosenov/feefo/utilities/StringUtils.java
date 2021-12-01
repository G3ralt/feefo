package com.alexosenov.feefo.utilities;

import com.alexosenov.feefo.constants.JobTitle;

import java.util.Objects;

public class StringUtils {

    public static String normalizeJobTitle(String inputJobTitle) {
        assert Objects.nonNull(inputJobTitle);

        double currentHighestScore = 0;
        String currentNormalizedTitle = null;

        for (String normalizedTitle : JobTitle.JOB_TITLES) {
            double qualityScore = calculateQualityScore(normalizeString(inputJobTitle), normalizeString(normalizedTitle));
            if(qualityScore > currentHighestScore) {
                currentHighestScore = qualityScore;
                currentNormalizedTitle = normalizedTitle;
            }
        }

        return currentNormalizedTitle;
    }

    private static double calculateQualityScore(String inputA, String inputB) {
        if(inputA.length() > inputB.length()) {
            return (inputA.length() - calculateChanges(inputA,inputB)) / (double) inputA.length();
        } else {
            return (inputB.length() - calculateChanges(inputB,inputA)) / (double) inputB.length();
        }
    }

    private static int calculateChanges(String longerInput, String shorterInput) {
        int[][] subProblems = new int[longerInput.length() + 1][shorterInput.length() + 1];

        for (int i = 0; i <= longerInput.length(); i++) {
            for (int j = 0; j <= shorterInput.length(); j++) {
                if (i == 0) {
                    subProblems[i][j] = j;
                } else if (j == 0) {
                    subProblems[i][j] = i;
                } else {
                    subProblems[i][j] = IntegerUtils.min(subProblems[i - 1][j - 1]
                                    + costOfSubstitution(longerInput.charAt(i - 1), shorterInput.charAt(j - 1)),
                            subProblems[i - 1][j] + 1,
                            subProblems[i][j - 1] + 1);
                }
            }
        }

        return subProblems[longerInput.length()][shorterInput.length()];
    }

    private static int costOfSubstitution(char a, char b) {
        return a == b ? 0 : 1;
    }

    private static String normalizeString(String input) {
        return input.replaceAll("\\s+", "").toLowerCase();
    }

}
