FROM openjdk:8
ADD target/meal-optimizer.jar meal-optimizer.jar
EXPOSE 5000
ENTRYPOINT ["java", "-Dspring.profiles.active=test", "-jar", "meal-optimizer.jar"]