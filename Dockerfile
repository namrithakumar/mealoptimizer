FROM openjdk:8
ADD target/meal-optimizer-rest-api.jar meal-optimizer-rest-api.jar
EXPOSE 5000
ENTRYPOINT ["java", "-Dspring.profiles.active=test", "-jar", "meal-optimizer-rest-api.jar"]