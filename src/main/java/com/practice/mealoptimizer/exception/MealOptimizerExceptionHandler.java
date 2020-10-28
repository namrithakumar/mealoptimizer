package com.practice.mealoptimizer.exception;

import com.fasterxml.jackson.databind.exc.MismatchedInputException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;
import org.springframework.web.HttpMediaTypeNotSupportedException;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;
import java.util.ArrayList;
import java.util.List;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@RestControllerAdvice
public class MealOptimizerExceptionHandler extends ResponseEntityExceptionHandler {

    @Override
    protected ResponseEntity<Object> handleExceptionInternal(Exception ex, Object body, HttpHeaders headers, HttpStatus status, WebRequest request) {
        if (body != null) {
            return new ResponseEntity<>(body, headers, status);
        } else {
            return super.handleExceptionInternal(ex, body, headers, status, request);
        }
    }

    /* MethodArgumentNotValidException: This exception is thrown when argument annotated with @Valid failed validation */
    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {

        // Add errors to a list to be handled together
        List<String> errors = new ArrayList<String>();
        for (FieldError error : ex.getBindingResult().getFieldErrors()) {
            errors.add(error.getField() + ": " + error.getDefaultMessage());
        }
        for (ObjectError error : ex.getBindingResult().getGlobalErrors()) {
            errors.add(error.getObjectName() + ": " + error.getDefaultMessage());
        }

        // Create custom exception
        MealOptimizerError mealOptimizerError = new MealOptimizerErrorTechnical(HttpStatus.BAD_REQUEST, ex.getLocalizedMessage(), errors);

        // Handle custom exception
        return this.handleExceptionInternal(
                ex, mealOptimizerError, (headers.isEmpty())?getDefaultHeader():headers, mealOptimizerError.status, request);
    }

    /*
    ConstrainViolationException: This exception reports the result of constraint violations
     */
    @ExceptionHandler({ConstraintViolationException.class})
    public ResponseEntity<Object> handleConstraintViolation(
            ConstraintViolationException ex, WebRequest request) {
        List<String> errors = new ArrayList<String>();
        for (ConstraintViolation<?> violation : ex.getConstraintViolations()) {
            errors.add(violation.getRootBeanClass().getName() + " " +
                    violation.getPropertyPath() + ": " + violation.getMessage());
        }

        MealOptimizerError mealOptimizerError =
                new MealOptimizerErrorTechnical(HttpStatus.BAD_REQUEST, ex.getLocalizedMessage(), errors);

        return this.handleExceptionInternal(
                ex, mealOptimizerError, getDefaultHeader(), mealOptimizerError.status, request);
    }

    /*
        MismatchedInputException is thrown when method argument is not the expected type e.g. when you send id as String instead of int
     */
    @ExceptionHandler({MismatchedInputException.class})
    public ResponseEntity<Object> handleMisMatchedInputException(
            MismatchedInputException ex, WebRequest request) {
        String error =
                "Incorrect field type in request. Check the fields type is " + ex.getTargetType();

        MealOptimizerError mealOptimizerError =
                new MealOptimizerErrorTechnical(HttpStatus.BAD_REQUEST, ex.getLocalizedMessage(), error);
        return this.handleExceptionInternal(
                ex, mealOptimizerError, getDefaultHeader(), mealOptimizerError.status, request);
    }

    /*
    HttpMessageNotReadableException is thrown when the request cannot be converted by Jackson. Usual errors are itemNames passed as int[] instead of String[].
 */
    @Override
    public ResponseEntity<Object> handleHttpMessageNotReadable(
            HttpMessageNotReadableException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
        String error = "Malformed JSON request. Check data type of input fields";

        MealOptimizerError mealOptimizerError =
                new MealOptimizerErrorTechnical(HttpStatus.BAD_REQUEST, ex.getLocalizedMessage(), error);
        return this.handleExceptionInternal(
                ex, mealOptimizerError, (headers.isEmpty())?getDefaultHeader():headers , mealOptimizerError.status, request);
    }

    /*
MissingServletRequestParameter is thrown when a required parameter in the url is not passed.
*/
    @Override
    public ResponseEntity<Object> handleMissingServletRequestParameter(
            MissingServletRequestParameterException ex, HttpHeaders headers,
            HttpStatus status, WebRequest request) {

        String error = "Required parameter " + ex.getParameterName() + " is missing in the URL";

        MealOptimizerError mealOptimizerError =
                new MealOptimizerErrorTechnical(HttpStatus.BAD_REQUEST, ex.getLocalizedMessage(), error);
        return this.handleExceptionInternal(
                ex, mealOptimizerError, (headers.isEmpty())?getDefaultHeader():headers, mealOptimizerError.status, request);
    }

    /*
    HttpRequestMethodNotSupportedException occurs when you send a requested with an unsupported HTTP method
 */
    @Override
    protected ResponseEntity<Object> handleHttpRequestMethodNotSupported(
            HttpRequestMethodNotSupportedException ex,
            HttpHeaders headers,
            HttpStatus status,
            WebRequest request) {
        StringBuilder builder = new StringBuilder();
        builder.append(ex.getMethod());
        builder.append(
                " method is not supported for this request. Supported methods are ");
        ex.getSupportedHttpMethods().forEach(t -> builder.append(t + " "));

        MealOptimizerError mealOptimizerError = new MealOptimizerErrorTechnical(HttpStatus.METHOD_NOT_ALLOWED,
                ex.getLocalizedMessage(), builder.toString());
        return this.handleExceptionInternal(
                ex, mealOptimizerError, (headers.isEmpty())?getDefaultHeader():headers, mealOptimizerError.status, request);
    }

    /*
HttpMediaTypeNotSupportedException occurs when you send a requested with an unsupported HTTP method
*/
    @Override
    protected ResponseEntity<Object> handleHttpMediaTypeNotSupported(
            HttpMediaTypeNotSupportedException ex,
            HttpHeaders headers,
            HttpStatus status,
            WebRequest request) {
        StringBuilder builder = new StringBuilder();
        builder.append(ex.getContentType());
        builder.append(" media type is not supported. Supported media types are ");
        ex.getSupportedMediaTypes().forEach(t -> builder.append(t + ", "));

        MealOptimizerError mealOptimizerError = new MealOptimizerErrorTechnical(HttpStatus.UNSUPPORTED_MEDIA_TYPE,
                ex.getLocalizedMessage(), builder.substring(0, builder.length() - 1));
        return this.handleExceptionInternal(
                ex, mealOptimizerError, (headers.isEmpty())?getDefaultHeader():headers, mealOptimizerError.status, request);
    }

    @ExceptionHandler({ResponseStatusException.class})
    protected ResponseEntity<Object> handleResponseStatusException(
            ResponseStatusException ex,
            WebRequest request) {
        String error = ex.getReason();

        MealOptimizerError mealOptimizerError = new MealOptimizerErrorFunctional(ex.getStatus(),
                ex.getMessage(), error);
        return this.handleExceptionInternal(
                ex, mealOptimizerError, getDefaultHeader(), mealOptimizerError.status, request);
    }

    @ExceptionHandler({UserException.class})
    protected ResponseEntity<Object> handleUserException(
            UserException ex,
            WebRequest request) {
        String error = ex.getMessage();

        MealOptimizerError mealOptimizerError = new MealOptimizerErrorFunctional(HttpStatus.FOUND,
                ex.getMessage(), error);
        return this.handleExceptionInternal(
                ex, mealOptimizerError, getDefaultHeader(), mealOptimizerError.status, request);
    }

    private HttpHeaders getDefaultHeader() {
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.set(HttpHeaders.CONTENT_TYPE, APPLICATION_JSON_VALUE);
        return httpHeaders;
    }
}