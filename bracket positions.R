
library(tidyverse)

Sets <- c(8, 4, 2, 2, 2)
gridConfig <- c(  90,
                  150,
                  213,
                  273,
                  337,
                  397,
                  460,
                  520,
                  584,
                  644,
                  707,
                  767,
                  831,
                  891,
                  954,
                  1014)
pOffset <- c(7, 3.5)


j <- 1 # round
i <- 1 # set
p <- 1 # player 2

"translate(" + ((j-1)*294 + 40.5) + "px, " + (gridConfig[(2*i-1)*2^(j-1)+p-1]+pOffset[p]) + "px)"

p <- 2 # player 2

"translate(" + ((j-1)*294 + 40.5) + "px, " + (gridConfig[(2*i-1)*2^(j-1)+p-1]+pOffset[p]) + "px)"


positions <- bind_rows(lapply(1:length(Sets), function(i) {
  expand.grid("round" = i, "set" = 1:Sets[i], "p" = 1:2)
}))
positions <- positions[!(positions$round == 5 & positions$p == 2), ]

positions$left <- (positions$round-1)*294 + 40.5
positions$top <- gridConfig[(2*positions$set-1)*2^(positions$round-1)+positions$p-1]+pOffset[positions$p]
positions$top[positions$round == 4 & positions$set == 2] <- c(gridConfig[12]+7, gridConfig[13]+3.5)
positions$top[positions$round == 5] <- c((gridConfig[8]+gridConfig[9])/2+7,
                                         (gridConfig[12]+gridConfig[13])/2+3.5)

css <- vector()
html <- vector()
for (i in 1:nrow(positions)) {
  css <- c(css, paste0("#boxbg", positions$round[i], positions$set[i], positions$p[i],
                       " {\n  left: ", positions$left[i],
                       "px;\n  top: ", positions$top[i], "px;\n}"))
  html <- c(html, paste0("<div id=\"boxbg", 
                         positions$round[i], positions$set[i], positions$p[i],
                         "\" class=\"boxbg\"></div>"))
}

cat(paste0(css, collapse = "\n"))
cat(paste0(html, collapse = "\n"))


positions <- bind_rows(lapply(1:(length(Sets)-1), function(i) {
  expand.grid("round" = i, "set" = 1:Sets[i])
}))
positions$left <- ((positions$round-1)*270 + 8.5) + 6*(positions$round-1.5)^2
positions$top <- gridConfig[(2*positions$set-1)*2^(positions$round-1)+1]-7
positions$width <- (positions$round-1)*12 + 270

css <- vector()
html <- vector()
for (i in 1:nrow(positions)) {
  css <- c(css, paste0("#hbar", positions$round[i], positions$set[i],
                               " {\n  left: ", positions$left[i],
                               "px;\n  top: ", positions$top[i], "px;\n  width: ", 
                               positions$width[i], "px;\n}"))
  html <- c(html, paste0("<div id=\"hbar", 
                                 positions$round[i], positions$set[i],
                                 "\" class=\"bracket hbar\"></div>"))
}
cat(paste0(css, collapse = "\n"))
cat(paste0(html, collapse = "\n"))


positions <- bind_rows(lapply(2:(length(Sets)-1), function(i) {
  expand.grid("round" = i, "set" = 1:Sets[i])
}))
positions$left <- ((positions$round-1)*270 + 8.5) + 6*(positions$round-1.5)^2
positions$top <- gridConfig[2^positions$round*(positions$set-1) + 2**(positions$round-2) + 1]-7
positions$height <- 2^(positions$round-2)*123 + 6


css <- vector()
html <- vector()
for (i in 1:nrow(positions)) {
  css <- c(css, paste0("#vbar", positions$round[i], positions$set[i],
                       " {\n  left: ", positions$left[i],
                       "px;\n  top: ", positions$top[i], "px;\n  height: ", 
                       positions$height[i], "px;\n}"))
  html <- c(html, paste0("<div id=\"vbar", 
                         positions$round[i], positions$set[i],
                         "\" class=\"bracket vbar\"></div>"))
}
cat(paste0(css, collapse = "\n"))
cat(paste0(html, collapse = "\n"))






positions <- bind_rows(lapply(1:length(Sets), function(i) {
  expand.grid("round" = i, "set" = 1:Sets[i], "p" = 1:2)
}))
positions <- positions[!(positions$round == 5 & positions$p == 2), ]

positions$left <- (positions$round-1)*294 + 40.5
positions$top <- gridConfig[(2*positions$set-1)*2^(positions$round-1)+positions$p-1]+pOffset[positions$p]
positions$top[positions$round == 4 & positions$set == 2] <- c(gridConfig[12]+7, gridConfig[13]+3.5)
positions$top[positions$round == 5] <- c((gridConfig[8]+gridConfig[9])/2+7,
                                         (gridConfig[12]+gridConfig[13])/2+3.5)

css <- vector()
html <- vector()
for (i in 1:nrow(positions)) {
  css <- c(css, paste0("#player", positions$round[i], positions$set[i], positions$p[i],
                       " {\n  left: ", positions$left[i],
                       "px;\n  top: ", positions$top[i], "px;\n}"))
  html <- c(html, paste0("<div id=\"player", 
                         positions$round[i], positions$set[i], positions$p[i],
                         "\" class=\"heroWrapper2\">\n<div class=\"name\"></div>\n<div class=\"icon\"><img></div>\n</div>"))
}

cat(paste0(css, collapse = "\n"))
cat(paste0(html, collapse = "\n"))


positions <- bind_rows(lapply(2:length(Sets), function(i) {
  expand.grid("round" = i, "p" = 1:2, "set" = 1:Sets[i])
}))
positions <- positions[!(positions$round == 5 & positions$p == 2), ]

cat(paste0("\"player", positions$round, positions$set, positions$p, "\"", collapse = ", "))





positions <- bind_rows(lapply(2:length(Sets), function(i) {
  expand.grid("round" = i, "set" = 1:Sets[i], "p" = 1:2)
}))
positions <- positions[!(positions$round == 5 & positions$p == 2), ]

positions$left <- (positions$round-1)*294 + 40.5 - 14.5
positions$top <- gridConfig[(2*positions$set-1)*2^(positions$round-1)+positions$p-1]+pOffset[positions$p] + 20
positions$top[positions$round == 4 & positions$set == 2] <- c(gridConfig[12]+27, gridConfig[13]+23.5)
positions$top[positions$round == 5] <- c((gridConfig[8]+gridConfig[9])/2+27,
                                         (gridConfig[12]+gridConfig[13])/2+23.5)

css <- vector()
html <- vector()
for (i in 1:nrow(positions)) {
  css <- c(css, paste0("#incorrect", positions$round[i], positions$set[i], positions$p[i],
                       " {\n  left: ", positions$left[i],
                       "px;\n  top: ", positions$top[i], "px;\n}"))
  html <- c(html, paste0("<div id=\"incorrect", 
                         positions$round[i], positions$set[i], positions$p[i],
                         "\" class=\"ibar\"></div>"))
}

cat(paste0(css, collapse = "\n"))
cat(paste0(html, collapse = "\n"))




