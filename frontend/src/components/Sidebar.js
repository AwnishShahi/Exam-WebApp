import React from "react";
import { Box, Typography, Paper } from "@mui/material";

function Sidebar({ questions, navigateToQuestion }) {
    return (
        <Paper elevation={3} sx={{ width: 220, height: "100%", padding: 2 }}>
            <Typography variant="h6" align="center" gutterBottom>
                All Questions
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                {questions.map((question, index) => (
                    <Box
                        key={index}
                        className={`question-number ${question.status}`}
                        onClick={() => navigateToQuestion(index)}
                        sx={{
                            padding: "10px",
                            margin: "5px",
                            borderRadius: "50%",
                            width: "50px",
                            height: "50px",
                            lineHeight: "30px",
                            backgroundColor: getColor(question.status),
                            color: "#fff",
                            textAlign: "center",
                            cursor: "pointer",
                            transition: "background-color 0.3s",
                        }}
                    >
                        {index + 1}
                    </Box>
                ))}
            </Box>
        </Paper>
    );
}

// Function to determine color based on question status
const getColor = (status) => {
    switch (status) {
        case "green":
            return "green";
        case "yellow":
            return "red";
        case "grey":
            return "grey";
        case "indigo":
            return "indigo";
        default:
            return "#6c757d"; // Default button color
    }
};

export default Sidebar;